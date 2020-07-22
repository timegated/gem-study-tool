"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Misc = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const miscSchema = new _mongoose.default.Schema({
  rockType: {
    type: String
  },
  deposit: {
    type: String
  },
  formation: {
    type: String
  },
  treat: {
    type: String
  },
  treatRes: {
    type: String
  },
  imit: {
    type: String
  },
  synth: {
    type: String
  },
  mohs: {
    type: Number
  },
  avgSize: {
    type: Number
  },
  phen: {
    type: String
  },
  trade: {
    type: String
  },
  funFacts: {
    type: String
  }
});

const Misc = _mongoose.default.model('misc', miscSchema);

exports.Misc = Misc;