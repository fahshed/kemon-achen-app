import Axios from 'axios';
import { AuthStorage } from '../authentication';

const axios = Axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axios.defaults.headers.common['x-mock-response-code'] = '200';
axios.interceptors.request.use(async (config) => {
  const user = await AuthStorage.getUser();
  const token = user.jwt;
  config.headers.Authorization = token;
  return config;
});

export default axios;
