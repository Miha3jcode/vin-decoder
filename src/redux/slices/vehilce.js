import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

import api from 'api';
import mappers from 'mappers';

const slice = 'vehicles';

const initialState = {
  vin: null,
};

export const decodeVin = createAsyncThunk(
  slice+ '/decodeVin',
  async function (vin) {
    const response = await api.vehiclesAPI.decode(vin);
    return response.data.Results
      .filter(variable => variable.Value)
      .map(mappers.mapVariable);
  },
);

const vehicle = createSlice({
  name: slice,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(decodeVin.fulfilled, (state, action) => {
      state.vin = action.payload;
    });

  },
});

export default vehicle.reducer

export const selectVin = state => state.vehicle.vin;