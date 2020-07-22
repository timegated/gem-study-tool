"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _source = _interopRequireDefault(require("./source.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */

/* eslint-disable no-undef */
const router = (0, _express.Router)();
router.route('/').post(_source.default.createOne).get(_source.default.getMany);
router.route('/:id').get(_source.default.getOne).put(_source.default.updateOne).delete(_source.default.deleteOne);
var _default = router;
exports.default = _default;