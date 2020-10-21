import mongoose from 'mongoose';
import options from '../config';

export const connect = (url = options.dbUrl, opts = {}) => {
  console.log('Mongodb connected');
  return mongoose.connect(url, {
    ...opts,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
