import * as mongoose from 'mongoose';

export const HabitSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
