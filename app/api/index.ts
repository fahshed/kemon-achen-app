import Axios from 'axios';

import { KAApiClent } from './KAApiClient';
import App from '../config';
import { store } from '../store';

const axios = Axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

//axios.defaults.headers.common['x-mock-response-code'] = '200';
axios.interceptors.request.use((config) => {
  const state = store.getState();

  if (state.User.isAuthenticated) {
    const token = state.User.user.jwt;
    config.headers.Authorization = token;
  }

  return config;
});

const Api = new KAApiClent(undefined, App.BASE_URL, axios);

export default Api;
export * from './KAApiClient';
export { KAApiClent as Client } from './KAApiClient';
