var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');

// viewed at http://localhost:8000
app.use(cookieParser());
app.get('/cr', function(req, res) {
    res.cookie('status', 'ALLOWED', {maxAge: 86400});
    res.cookie('country', 'CR');
    res.sendFile(path.join(__dirname + '/cr.html'));
});

app.get('/usa', function(req, res) {
    res.cookie('status', 'ALLOWED', {maxAge: 86400});
    res.cookie('country', 'USA');
    res.sendFile(path.join(__dirname + '/usa.html'));
});

app.get('/br', function(req, res) {
    res.cookie('status', 'ALLOWED', {maxAge: 86400});
    res.cookie('country', 'CR');
    res.sendFile(path.join(__dirname + '/br.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/blocked', function(req, res) {
    res.cookie('country', 'BLOCKED', {maxAge: 86400});
    res.status(403).sendFile(path.join(__dirname + '/blocked.html'));
});

app.listen(8000, function(){
    console.log("App is running over server http://localhost:8000")
});
