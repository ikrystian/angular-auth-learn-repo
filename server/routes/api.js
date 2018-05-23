const express = require('express');
const router = express.Router();
const User = require('../models/user');
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

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registerUser) => {
        if(error) {
            console.log(error);
        } else {
            res.status(200).send(registerUser);
        }
    });
});

module.exports = router;