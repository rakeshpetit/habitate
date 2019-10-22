import * as mongoose from 'mongoose';

export const TrackedHabitSchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit',
  },
  completedAt: {
    type: Date,
    default: Date.now(),
  },
});
