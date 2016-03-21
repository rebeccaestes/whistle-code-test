var MessageModel = require("../models/message")

var messagesController = {
  index: function(req, res){
    MessageModel.find({}, function(err){
      res.render("messages/index");
    })
  },
  create: function(req, res){
    var message = new MessageModel({ name: req.body.name, phone: req.body.phone, email: req.body.email });
    console.log(message);
    message.save(function(err){
      if (!err){
        console.log("something good happened");
        // res.render("messages/index")
        // document.getElementsByClassName("form").className = "hidden";
        // document.getElementsByClassName("thanks").className = "shown";
      } else {
        console.log("something bad happened");
        // res.render("messages/index");
      }

    })
    debugger;
  }
}

module.exports = messagesController;