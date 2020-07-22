"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _color = _interopRequireDefault(require("./color.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const router = (0, _express.Router)();
router.route('/').post(_color.default.createOne).get(_color.default.getMany);
router.route('/:id').get(_color.default.getOne).put(_color.default.updateOne).delete(_color.default.deleteOne);
var _default = router;
exports.default = _default;