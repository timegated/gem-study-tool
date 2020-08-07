"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appear = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appearSchema = new _mongoose.default.Schema({
  name: {
    type: String
  },
  colorAgent: {
    type: String
  },
  caEffects: [{
    type: String
  }],
  phen: {
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

const Appear = _mongoose.default.model('appear', appearSchema);

exports.Appear = Appear;