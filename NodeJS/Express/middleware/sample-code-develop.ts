var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
}

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}

app.use(myLogger);
app.use(requestTime);

app.get('/', function(req, res) {
    var responseText = 'Hello';
    responseText += 'Requested at : ' + req.requestTime + '';
    res.send(responseText);
});

app.listen(3000);