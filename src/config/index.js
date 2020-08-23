import { merge } from 'lodash';

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const baseConfig = {
  env,
  isDev: env === 'development',
  port: PORT,
};

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;
  default:
    envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
