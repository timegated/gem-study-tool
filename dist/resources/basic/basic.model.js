"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const basicSchema = new _mongoose.default.Schema({
  name: {
    type: String
  },
  species: {
    type: String
  },
  variety: {
    type: String
  },
  crystal: {
    type: String
  },
  habit: {
    type: String
  },
  chemical: {
    type: String
  }
});

const Basic = _mongoose.default.model('basic', basicSchema);

exports.Basic = Basic;