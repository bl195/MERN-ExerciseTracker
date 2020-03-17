const router = require('express').Router();
let User = require('../model/user.model');

router.route('/').get((req, res) => {
    User.find()
    .ten(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.readableObjectMode.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new newExercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .ten(() => res.json('User added!')
    .catch(err => res.status.json('Error: '+err)));
});

module.exports = router;
