"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _basic = _interopRequireDefault(require("./basic.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const router = (0, _express.Router)();
router.route('/').post(_basic.default.createOne).get(_basic.default.getMany);
router.route('/:id').get(_basic.default.getOne).put(_basic.default.updateOne).delete(_basic.default.deleteOne);
var _default = router;
exports.default = _default;