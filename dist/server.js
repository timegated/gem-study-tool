"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _db = require("./utils/db");

var _appear = _interopRequireDefault(require("./resources/appear/appear.router"));

var _basic = _interopRequireDefault(require("./resources/basic/basic.router"));

var _misc = _interopRequireDefault(require("./resources/misc/misc.router"));

var _source = _interopRequireDefault(require("./resources/source/source.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from './config';
const app = (0, _express.default)();

const router = _express.default.Router();

app.disable('x-powered-by');
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev'));
app.use((0, _cors.default)());
app.get('/', (req, res) => {
  res.send({
    msg: 'Hello from the server'
  });
});
app.use('/api', router);
app.use('/api/appear', _appear.default);
app.use('/api/basic', _basic.default);
app.use('/api/misc', _misc.default);
app.use('/api/source', _source.default);

if (process.env.NODE_ENV === 'production') {
  app.use(_express.default.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(_path.default.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.NODE_ENV || 3000;

const start = async () => {
  try {
    await (0, _db.connect)();
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();