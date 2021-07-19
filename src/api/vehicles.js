import api from './axios';

const vehiclesAPI = {

  decode(vin) {
    return api.get(`/vehicles/DecodeVin/${vin}?format=json`);
  },

};

export default vehiclesAPI;