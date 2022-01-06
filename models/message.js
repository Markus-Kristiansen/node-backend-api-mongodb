const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create message schema and model
const MessageSchema = new Schema({
  topic: {
    type: String,
    required: [true, "Topic must be part of the post request"],
  },
  message: {
    type: String,
    required: [true, "Message must be part of the post request"],
  },
  amtOfSoda: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
