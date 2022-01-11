var express = require('express');
var student = require('./db');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/test', function(req, res) {
    console.log('diocane');
});

app.post('/account', function(req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var mail = req.body.mail;
    var pass = req.body.pass;
    currentId++;

    student.newUser(fname, lname, mail, pass);

    res.send('Successfully created product!');
});

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});