import api from './axios';

const vehiclesAPI = {

  decode(vin) {
    return api.get(`/vehicles/DecodeVin/${vin}?format=json`);
  },

  getProperties() {
    return api.get(`/vehicles/GetVehicleVariableList?format=json`);
  },

  getPropertyValues(variableId) {
    console.log('variableId', variableId)
    return api.get(`/vehicles/GetVehicleVariableValuesList/${variableId}?format=json`);
  },

};

export default vehiclesAPI;