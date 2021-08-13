const router = require("express").Router();
const Workout = require("../models/workouts.js");

//API.getLastWorkout
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: $exercises.duration },
      },
    },
  ])
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//API.addExercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//API.createWorkout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//API.getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: $exercises.duration },
      },
    },
  ])
    .sort({ date: -1 })
    .limit(7)
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
