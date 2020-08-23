import mongoose from 'mongoose';
import options from '../config';
console.log(options.dbUrl);
export const connect = (url = options.dbUrl, opts = {}) => {
  
  console.log(typeof url);

  console.log('Mongodb connected');
  return mongoose.connect(url, {
    ...opts,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
