"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _appear = require("./appear.model");

var _default = (0, _crud.crudControllers)(_appear.Color);

exports.default = _default;