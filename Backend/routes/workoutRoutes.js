const express = require('express');
const router = express.Router();

// Fetch all workouts
router.get('/', (req, res) => {
    res.send('Get all workouts');
});

// Fetch a single workout by ID
router.get('/:id', (req, res) => {
    res.send(`Get workout with ID: ${req.params.id}`);
});

// Add a new workout
router.post('/', (req, res) => {
    res.send('Add a new workout');
});

// Update a workout by ID
router.put('/:id', (req, res) => {
    res.send(`Update workout with ID: ${req.params.id}`);
});

// Delete a workout by ID
router.delete('/:id', (req, res) => {
    res.send(`Delete workout with ID: ${req.params.id}`);
});

module.exports = router;
