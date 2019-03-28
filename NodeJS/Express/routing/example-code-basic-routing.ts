var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Get method');
});
    
app.post('/', function (req, res) {
    res.send('Post method');
});
    
app.put('/', function (req, res) {
    res.send('Put method');
});

app.delete('/', function (req, res) {
    res.send('Delete method');
});