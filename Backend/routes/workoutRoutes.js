const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// Fetch all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Fetch a single workout by ID
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: 'Workout not found' });
        res.json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Add a new workout
router.post('/', async (req, res) => {
    const workout = new Workout(req.body);
    try {
        const newWorkout = await workout.save();
        res.status(201).json(newWorkout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// Update a workout by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWorkout) return res.status(404).json({ message: 'Workout not found' });
        res.json(updatedWorkout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Delete a workout by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
        if (!deletedWorkout) return res.status(404).json({ message: 'Workout not found' });
        res.json({ message: 'Workout deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
