const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
// yup - credentials to database in GH repo <3
const db = "mongodb://user:password@ds231559.mlab.com:31559/ngdb";

mongoose.connect(db, err => {
    if(err) {
        console.log('Error: ' + err);
    } else {
        console.log('Connected to mongodb');
    }
});

router.get('/', (req, res) => {
    res.send('From API route');
});

module.exports = router;