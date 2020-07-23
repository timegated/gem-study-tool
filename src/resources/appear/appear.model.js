import mongoose from 'mongoose';

const appearSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  colorAgent: {
    type: String,
  },
  caEffects: {
    type: String,
  },
  phen: {
    type: String,
  },
  color: {
    type: String,
  },
  fineCol: {
    type: String,
  },
  opacity: {
    type: String,
  },
  fineTone: {
    type: String,
  },
  fineSat: {
    type: String,
  },
  clarity: {
    type: String,
  },
  clarityType: {
    type: String,
  },
  cut: {
    type: String,
  },
});

export const Appear = mongoose.model('appear', appearSchema);
