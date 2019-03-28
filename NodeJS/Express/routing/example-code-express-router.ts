// children.js
var express = require('express');
var router = express.Router();

// middleware
router.use(function timeLog(req, res, next) {
    console.log('Time : ', Date.now());
    next();
});

// define home page
router.get('/', function(req, res) {
    res.send('Home page');
});

module.exports = router;

// --------------------------------------


// app.js
var children = require('./children');

app.use('/children', children);