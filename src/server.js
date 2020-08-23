import express from 'express';
import path from 'path';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db';
import config from './config';
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

app.use('/api', router);
app.use('/api/appear', appearRouter);
app.use('/api/basic', basicRouter);
app.use('/api/misc', miscRouter);
app.use('/api/source', sourceRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`Server running on port: ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
