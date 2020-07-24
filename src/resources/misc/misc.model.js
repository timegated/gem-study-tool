import mongoose from 'mongoose';

const miscSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rockType: {
    type: String,
  },
  deposit: {
    type: String,
  },
  formation: {
    type: String,
  },
  treat: {
    type: String,
  },
  treatRes: {
    type: String,
  },
  imit: {
    type: String,
  },
  synth: {
    type: String,
  },
  mohs: {
    type: Number,
  },
  avgSize: {
    type: Number,
  },
  trade: {
    type: String,
  },
  funFacts: {
    type: String,
  },
});

export const Misc = mongoose.model('misc', miscSchema);
