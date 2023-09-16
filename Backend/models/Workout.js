const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sets: {
        type: Number,
        default: 0,
    },
    reps: {
        type: Number,
        default: 0,
    },
    duration: {
        type: String, // Format: "minutes:seconds"
        default: "0:00",
    },
    weight: {
        type: Number, // In pounds
        default: 0,
    },
    equipment: String,
    notes: String,
    intensity: String,
    restPeriod: {
        type: String, // Format: "minutes:seconds"
        default: "0:00",
    },
    targetMuscles: [String],
    status: {
        type: String,
        enum: ['completed', 'skipped', 'pending'],
        default: 'pending',
    },
});

const WorkoutSchema = new mongoose.Schema({
    routineName: {
        type: String,
        required: true,
    },
    exercises: [ExerciseSchema],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Workout', WorkoutSchema);
