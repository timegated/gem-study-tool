"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gems = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gemSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
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

const Gems = _mongoose.default.model('gem', gemSchema);

exports.Gems = Gems;