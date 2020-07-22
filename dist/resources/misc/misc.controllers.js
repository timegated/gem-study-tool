"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _misc = require("./misc.model");

var _default = (0, _crud.crudControllers)(_misc.Misc);

exports.default = _default;