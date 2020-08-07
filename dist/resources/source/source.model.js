"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sourceSchema = new _mongoose.default.Schema({
  name: {
    type: String
  },
  primary: {
    type: String
  },
  mines: {
    type: String
  },
  mainConsume: {
    type: String
  },
  manu: {
    type: String
  }
});

const Source = _mongoose.default.model('source', sourceSchema);

exports.Source = Source;