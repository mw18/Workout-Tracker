var db = require("../models");

module.exports = function (app) {
    //pulls infor\ for workouts 
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // pulls info for range page 
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Creates a new workout in the workout database
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then((workout) => {
            res.json(workout);
        })
            .catch(err => {
                res.json(err);
            });
    })

    // update workouts by  _id value and update the exercsise body
    app.put("/api/workouts/:id", (req, res) => {
        // console.log(body, params)

        // db.Workout.findByIdAndUpdate(
        //     req.params.id,
        //     { $push: { exercises: req.body } },
        //     { new: true }
        // )
        //     .then(workout => res.json(workout))
        //     .catch(err => res.json(err));


    const workoutId = params.id;
    let savedExercises = [];

    // gets all the currently saved exercises in the current workout
    db.Workout.find({ _id: workoutId })
        .then(dbWorkout => {
            // console.log(dbWorkout)
            savedExercises = dbWorkout[0].exercises;
            res.json(dbWorkout[0].exercises);
            let allExercises = [...savedExercises, body]
            console.log(allExercises)
            updateWorkout(allExercises)
        })
        .catch(err => {
            res.json(err);
        });

    function updateWorkout(exercises) {
        db.Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
            if (err) {
                console.log(err)
            }

        })
    }

})

};