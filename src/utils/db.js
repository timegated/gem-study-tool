import mongoose from 'mongoose';

export const connect = (
  url = `mongodb+srv://dbeccaria:${process.env.DB_PW}@cluster0.itfdp.mongodb.net/<dbname>?retryWrites=true&w=majority`,
  opts = {}
) => {
  console.log('Mongodb connected');
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
