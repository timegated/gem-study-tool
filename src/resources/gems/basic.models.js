import mongoose from 'mongoose';

const gemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
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

export const Gems = mongoose.model('gem', gemSchema);
