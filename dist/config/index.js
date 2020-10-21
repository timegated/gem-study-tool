"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;
const baseConfig = {
  env,
  isDev: env === 'development',
  port: PORT
};
let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;

  case 'prod':
  case 'production':
    envConfig = function () {
      console.log('this is running in production');
      return env.config = require('./dev').config;
    };

    break;

  default:
    envConfig = require('./dev').config;
}

var _default = (0, _lodash.merge)(baseConfig, envConfig);

exports.default = _default;