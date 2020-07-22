"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _misc = _interopRequireDefault(require("./misc.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const router = (0, _express.Router)();
router.route('/').post(_misc.default.createOne).get(_misc.default.getMany);
router.route('/:id').get(_misc.default.getOne).put(_misc.default.updateOne).delete(_misc.default.deleteOne);
var _default = router;
exports.default = _default;