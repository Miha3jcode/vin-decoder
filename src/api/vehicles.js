import api from './axios';

const vehiclesAPI = {

  decode(vin) {
    return api.get(`/vehicles/DecodeVin/${vin}?format=json`);
  },

  getProperties() {
    return api.get(`/vehicles/GetVehicleVariableList?format=json`);
  },

};

export default vehiclesAPI;