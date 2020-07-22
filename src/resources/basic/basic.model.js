import mongoose from 'mongoose';

const basicSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  species: {
    type: String,
  },
  variety: {
    type: String,
  },
  crystal: {
    type: String,
  },
  habit: {
    type: String,
  },
  chemical: {
    type: String,
  },
});

export const Basic = mongoose.model('basic', basicSchema);
