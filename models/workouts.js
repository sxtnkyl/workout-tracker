const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const workoutSchema = new Schema({
  //for most recent
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter a type for the exercise",
      },
      weight: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter the exercise duration in minutes",
      },
      //for type cardio
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
