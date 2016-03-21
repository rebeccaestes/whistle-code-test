var mongoose = require('mongoose');

var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId

var MessageSchema = new Schema({
  name: String,
  phone: String,
  email: String
});

var MessageModel = mongoose.model("Message", MessageSchema)
