"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const colorSchema = new _mongoose.default.Schema({
  colorAgent: {
    type: String
  },
  caEffects: {
    type: String
  },
  color: {
    type: String
  },
  fineCol: {
    type: String
  },
  opacity: {
    type: String
  },
  fineTone: {
    type: String
  },
  fineSat: {
    type: String
  },
  clarity: {
    type: String
  },
  clarityType: {
    type: String
  },
  cut: {
    type: String
  }
});

const Color = _mongoose.default.model('color', colorSchema);

exports.Color = Color;