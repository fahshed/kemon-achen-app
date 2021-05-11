import Axios from 'axios';

const axios = Axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

//axios.defaults.headers.common['x-mock-response-code'] = '200';
axios.interceptors.request.use((config) => {
  const token = 'some token';
  config.headers.Authorization = token;
  return config;
});

export default axios;
