var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");
var app = express()
var port = process.env.PORT || 8080



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

require('./controllers/burgers_controller.js')(app);




app.listen(port, function() {
  console.log("App listening on PORT: " + port)
});

