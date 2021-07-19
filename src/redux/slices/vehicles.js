import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

import api from 'api';
import mappers from 'mappers';

const slice = 'vehicles';

const initialState = {
  currentVinCode: null,
  vins: [],
  loading: 'idle',
};

export const decodeVin = createAsyncThunk(
  slice+ '/decodeVin',
  async function (vinCode, {getState}) {

    const state = getState();
    console.log('stata', state)
    const vins = state.vehicle.vins;

    const index = vins.findIndex(vin => vin.vinCode === vinCode);

    if (index > -1) {
      return {
        vin: vins[index],
        isCached: true,
      };
    }

    const response = await api.vehiclesAPI.decode(vinCode);

    const properties =  response.data.Results
      .filter(variable => variable.Value)
      .map(mappers.mapVariable);

    return {
      vin: {
        vinCode: vinCode,
        properties: properties,
        message: response.data.Message,
      },
      isCached: false,
    };
  },
  {
    condition(vinCode, {getState}) {
      const state = getState();
      if (state.vehicle.loading === 'pending') return false;
    },
  },
);

const vehicle = createSlice({
  name: slice,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(decodeVin.pending, (state, action) => {
      state.loading = action.meta.requestStatus;
    });

    builder.addCase(decodeVin.fulfilled, (state, action) => {
      state.currentVinCode = action.payload.vin.vinCode;

      if (action.payload.isCached) {
        const index = state.vins.findIndex(vin => vin.vinCode === action.payload.vin.vinCode);
        state.vins = state.vins
          .slice(0, index)
          .concat(state.vins.slice(index, state.vins.length - 1));
      } else {
        state.vins = [
          action.payload.vin,
          ...state.vins,
        ];
        state.vins.pop();
      }

    });

    builder.addCase(decodeVin.rejected, (state, action) => {
      state.loading = action.meta.requestStatus;
    });

  },
});

export default vehicle.reducer

export const selectCurrentVinCode = state => state.vehicle.currentVinCode;
export const selectVins = state => state.vehicle.vins;

export const selectVinCodes = createSelector(
  selectVins,
  (vins) => vins.map(vin => vin.vinCode),
);

export const selectCurrentVin = createSelector(
  selectCurrentVinCode,
  selectVins,
  (currentVinCode, vins) => vins.find(vin => vin.vinCode === currentVinCode),
);