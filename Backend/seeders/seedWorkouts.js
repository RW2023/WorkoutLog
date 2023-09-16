const mongoose = require('mongoose');
const Workout = require('../models/Workout');

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//create seed data
const seedData = [
    {
        routineName: 'Leg Day',
        exercises: [
            { name: 'Squats', sets: 4, reps: 12, weight: 200, duration: '00:45' },
            { name: 'Lunges', sets: 3, reps: 10, weight: 150, duration: '00:30' },
        ],
    },
    {
        routineName: 'Arm Day',
        exercises: [
            { name: 'Bicep Curl', sets: 3, reps: 10, weight: 50, duration: '00:25' },
            { name: 'Tricep Extension', sets: 3, reps: 10, weight: 50, duration: '00:25' },
        ],
    },
    {
        routineName: 'Cardio',
        exercises: [
            { name: 'Running', duration: '20:00' },
            { name: 'Jumping Jacks', duration: '05:00' },
        ],
    },
    {
        routineName: 'Full Body',
        exercises: [
            { name: 'Deadlift', sets: 4, reps: 8, weight: 220, duration: '01:00' },
            { name: 'Push Ups', sets: 3, reps: 15, duration: '00:40' },
            { name: 'Plank', duration: '03:00' },
        ],
    },
    {
        routineName: 'Recovery',
        exercises: [
            { name: 'Stretching', duration: '15:00' },
            { name: 'Yoga', duration: '20:00' },
        ],
    },
];

//insert seed data
Workout.insertMany(seedData)
    .then(() => {
        console.log('Data seeded!');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log('Error seeding data: ', error.red);
    });

