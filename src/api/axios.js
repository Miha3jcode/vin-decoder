import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vpic.nhtsa.dot.gov/api/',
});

instance.defaults.timeout = 15 * 1000;

export default instance;