const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error(`MongoDB connection error: ${err}`);
    });

// Connection Events
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Now we are cooking with gas!')
    console.log('Mongoose default connection is UP');
});

db.on('error', (err) => {
    console.error(`Mongoose default connection has occurred ${err} error`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

app.get('/', (req, res) => {
    res.send('YO YO!, Workout Tracker is Serving!');
});

app.listen(PORT, () => {
    console.log('The Data Flows Through You!');
    console.log(`Author: ${process.env.DEV}`);
    console.log(`Server running on http://localhost:${PORT}`);
});

