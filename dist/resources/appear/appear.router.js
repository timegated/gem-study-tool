"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _appear = _interopRequireDefault(require("./appear.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const router = (0, _express.Router)();
router.route('/').post(_appear.default.createOne).get(_appear.default.getMany);
router.route('/:id').get(_appear.default.getOne).put(_appear.default.updateOne).delete(_appear.default.deleteOne);
var _default = router;
exports.default = _default;