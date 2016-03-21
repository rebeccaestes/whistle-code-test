var MessageModel = require("../models/message")

var messagesController = {
  index: function(req, res){
      res.render("messages/index");
  },
  thanks: function(req, res){
      res.render("messages/thanks");
  },
  create: function(req, res){
    var message = new MessageModel({ name: req.body.name, phone: req.body.phone, email: req.body.email });
    message.save(function(err){
      if (!err){
        res.render("messages/thanks")
      } else {
        res.render("messages/index");
      }
    })
  }
}

module.exports = messagesController;