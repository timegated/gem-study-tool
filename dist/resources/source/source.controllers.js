"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _source = require("./source.model");

var _default = (0, _crud.crudControllers)(_source.Source);

exports.default = _default;