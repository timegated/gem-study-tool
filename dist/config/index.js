"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const env = process.env.NODE_ENV || 'development';
const baseConfig = {
  env,
  isDev: env === 'development',
  port: 3000
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

var _default = (0, _lodash.default)(baseConfig, envConfig);

exports.default = _default;