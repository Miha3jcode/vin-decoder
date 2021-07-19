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
  cacheLimit: 5,
  vins: [],
  loading: 'idle',
};

export const decodeVin = createAsyncThunk(
  slice+ '/decodeVin',
  async function (vinCode, {getState}) {

    const state = getState();
    const vins = state.vehicles.vins;
    const index = vins.findIndex(vin => vin.vinCode === vinCode);

    if (index > -1) return vins[index]

    const response = await api.vehiclesAPI.decode(vinCode);

    const properties =  response.data.Results
      .filter(variable => variable.Value)
      .map(mappers.mapVariable);

    return {
      vinCode: vinCode,
      properties: properties,
      message: response.data.Message,
    };
  },
  {
    condition(vinCode, {getState}) {
      const state = getState();
      if (state.vehicles.loading === 'pending') return false;
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
      state.currentVinCode = action.payload.vinCode;
      state.loading = action.meta.requestStatus;

      const index = state.vins.findIndex(vin => vin.vinCode === action.payload.vinCode);

      if (index > -1) {
        // move current vin at history start
        state.vins.splice(index, 1);
        state.vins.splice(0, 0, action.payload);
      } else {
        // add new vin
        state.vins.splice(0, 0, action.payload);

        // remove last vin if there are more then cache limit
        if (state.vins.length > state.cacheLimit) {
          state.vins.splice(state.vins.length - 1, 1);
        }
      }
    });

    builder.addCase(decodeVin.rejected, (state, action) => {
      state.loading = action.meta.requestStatus;
    });

  },
});

export default vehicle.reducer

export const selectCurrentVinCode = state => state.vehicles.currentVinCode;
export const selectVins = state => state.vehicles.vins;
export const selectIsVinLoading = state => state.vehicles.loading === 'pending';

export const selectVinCodes = createSelector(
  selectVins,
  (vins) => vins.map(vin => vin.vinCode),
);

export const selectCurrentVin = createSelector(
  selectCurrentVinCode,
  selectVins,
  (currentVinCode, vins) => vins.find(vin => vin.vinCode === currentVinCode),
);