const express = require('express');
const jwt = require('jsonwebtoken');
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
    user.save((error, registeredUser) => {
        if(error) {
            console.log(error);
        } else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, 'bpcKey');
            res.status(200).send({token});
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if(error) {
            console.log(error);
        } else {
            if(!user) {
                res.status(401).send('Invalid email');
            } else
            if(user.password !== userData.password) {
                res.status(401).send('Invalid password');
            } else {
                let payload = { subject: user._id };
                let token = jwt.sign(payload, 'bpcKey');
                res.status(200).send({token});
            }
        }
    });
});

router.get('/events', (req, res) => {
    // hardcoded data to show in app
    let events = [
        {
            "_id": "1",
            "name": "BPCCup #1",
            "description": "BPCoders SCII Cup #1",
            "date": "2018-04-23T18:25:43.511Z"
        }
    ];

    res.json(events);
});

router.get('/special', (req, res) => {
    // hardcoded data to show in app
    let events = [
        {
            "_id": "1",
            "name": "BPCCup #2",
            "description": "BPCoders SCII Cup #1",
            "date": "2018-05-23T18:25:43.511Z"
        }
    ];

    res.json(events);
});

module.exports = router;