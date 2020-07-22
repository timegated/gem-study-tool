import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  colorAgent: {
    type: String,
  },
  caEffects: {
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
  }
});

export const Color = mongoose.model('color', colorSchema);