
var student = require('./db');
var bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;






app.get('/test', function(req, res) {
    res.json({ 
        "x":{}
  });
});

app.post('/account', function(req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var mail = req.body.mail;
    var pass = req.body.pass;
    

    student.newUser(fname, lname, mail, pass);
    res.json({ 
        "x":{}
  });
    
  });


app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});