"use strict";

var _express = require("express");

var _color = _interopRequireDefault(require("./color.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */

/* eslint-disable no-undef */
const router = (0, _express.Router)();
router.route('/').post(_color.default.createOne).get(_color.default.getMany);
router.route('/:id').get(_color.default.getOne).put(_color.default.updateOne).delete(_color.default.deleteOne);