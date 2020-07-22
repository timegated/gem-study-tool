"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _basic = require("./basic.model");

var _default = (0, _crud.crudControllers)(_basic.Basic);

exports.default = _default;