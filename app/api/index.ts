import { KAApiClent } from './KAApiClient';

import App, { axios } from '../config';

const api = new KAApiClent(undefined, App.BASE_URL, axios);

export default api;
export { KAApiClent as Client };
