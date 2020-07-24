import mongoose from 'mongoose';

const sourceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  primary: {
    type: String,
  },
  mines: {
    type: String,
  },
  mainConsume: {
    type: String,
  },
  manu: {
    type: String,
  },
});

export const Source = mongoose.model('source', sourceSchema);
