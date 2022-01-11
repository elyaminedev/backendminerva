var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/test', function(req, res) {
    console.log('diocane');
});


app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});