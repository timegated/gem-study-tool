import mongoose from 'mongoose';

export const connect = (
  url = 'mongodb://localhost:27017/gem-tools',
  opts = {}
) => {
  console.log('Mongodb connected');
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
