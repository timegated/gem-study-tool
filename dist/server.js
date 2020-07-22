"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _db = require("./utils/db");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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