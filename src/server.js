import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db';
// import config from './config';
import colorRouter from './resources/color/color.router';
import basicRouter from './resources/basic/basic.router';
import miscRouter from './resources/misc/misc.router';
import sourceRouter from './resources/source/source.router';
const app = express();
const router = express.Router();

app.disable('x-powered-by');

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send({ msg: 'Hello from the server' });
});

app.use('/', router);
app.use('/color', colorRouter);
app.use('/basic', basicRouter);
app.use('/misc', miscRouter);
app.use('/source', sourceRouter);

const PORT = process.env.NODE_ENV || 3000;

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
