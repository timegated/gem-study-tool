import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db';
// import config from './config';
import appearRouter from './resources/appear/appear.router';
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

app.use('/api', router);
app.use('/api/appear', appearRouter);
app.use('/api/basic', basicRouter);
app.use('/api/misc', miscRouter);
app.use('/api/source', sourceRouter);

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
