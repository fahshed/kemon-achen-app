import production from './production';
import development from './development';
import mockServer from './mockServer';

const configMap = {
  production,
  development,
  mockServer,
};

export default configMap.development;
