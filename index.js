var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var messagesController = require("./controllers/messagesController")

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/messages');

var app = express()

app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 4000, function(){
  console.log("app listening on port 4000")
})

app.get("/messages", messagesController.index);
app.post("/messages", messagesController.create);