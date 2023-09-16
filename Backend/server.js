const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const workoutRoutes = require('./routes/workoutRoutes');
require('colors');

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
// Mount the workout routes
app.use('/api/workouts', workoutRoutes);


// Use the workout routes
app.use('/workouts', workoutRoutes);




// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connected successfully'.green);
    })
    .catch(err => {
        console.error(`MongoDB connection error: ${err}`.red);
    });

// Connection Events
const db = mongoose.connection;

db.on('connected', () => {
    console.log('We are up back here!'.bgYellow.black)
    console.log('Mongoose default connection is UP'.green);
});

db.on('error', (err) => {
    console.error(`Mongoose default connection has occurred ${err} error`.red);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected'.red);
});

app.get('/', (req, res) => {
    res.send('YO YO!, Workout Tracker is Serving!');
});

app.listen(PORT, () => {
 
    console.log(`Developer: ${process.env.DEV}`.bgBlue.black);
    console.log(`Server running on http://localhost:${PORT}`.green);
});

