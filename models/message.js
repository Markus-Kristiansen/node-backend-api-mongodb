const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create message schema and model
const MessageSchema = new Schema({
  topic: {
    type: String,
    required: [true, "Topic needs to be part of the post"],
  },
  message: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
