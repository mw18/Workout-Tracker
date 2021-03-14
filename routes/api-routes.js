
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
    

        db.Workout.findByIdAndUpdate(
            { _id: req.params.id }, 
            {$push: { exercises: req.body }}
            ).then((dbWorkout) => {
                console.log(dbWorkout)
              res.json(dbWorkout);
            })
            .catch(err => res.json(err));


})

};