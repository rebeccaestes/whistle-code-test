require("../db/schema");
var mongoose = require('mongoose');

var MessageModel = mongoose.model("Message");
module.exports = MessageModel;