
var student = require('./db'); // db object
var bodyParser = require('body-parser'); // handling json
const express = require("express"); // server
const cors = require("cors"); // infrastructure allowing request from/to different domains
const app = express(); // instance of the server

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;  // server port





// testing
app.get('/test', function(req, res) {
    res.json({ 
        "x":{}
  });
});

//api post, retrieves data from the call and creates a new account inside of the database
app.post('/account', function(req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var mail = req.body.mail;
    var pass = req.body.pass;
    

    student.newUser(fname, lname, mail, pass); // calls the method from db obj
    
    res.json({ 
        "x": '2'
  });
    
  });

  app.post('/login', function(req, res) {
    var email = req.body.email;
    var pass = req.body.pass;
    

    student.login(email, pass).then(
        value => {
            if(value == {})
            res.json({
                "x" : '0' // returns 0 if password/email are mistaken
            });
            else
            res.json({
                "x" : value.id // return id > 0 if there are the inserted credentials
            });
        }); 
            
        
    
    // calls the method from db obj
    
  });

// server is listening
app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});