import mongoose from 'mongoose';

const sourceSchema = new mongoose.Schema({
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
