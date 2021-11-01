const express = require("express");
const Message = require("../models/message");
const router = express.Router();
const mqttFunctions = require("../mqtt");
const mqtt = require("mqtt");

const host = "hairdresser.cloudmqtt.com";
const port = "15658";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "vbyjequy",
  password: "1Ks-WnMKh7Bo",
  reconnectPeriod: 1000,
});

const topic = "machine";
client.on("connect", () => {
  console.log("Connected");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

client.on("message", async (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
  const temp = JSON.parse(payload.toString());
  const message = new Message({
    topic: topic,
    message: temp.message,
    amtOfSoda: temp.amtOfSoda,
  });

  const result = await message.save();
  console.log(result);
});

// Get a list of messages from the db
router.get("/messages", (req, res, next) => {
  Message.find({}).then((messages) => {
    res.send(messages);
  });
});

// add a new message to the db

router.post("/messages", (req, res, next) => {
  Message.create({ message: "Test" })
    .then((messages) => {
      res.send(messages);
      console.log(messages);
    })
    .catch(next);
});

// update a message in the db
router.put("/messages/:id", (req, res, next) => {
  Message.findByIdAnd({ _id: req.params.id }, req.body).then(() => {
    Message.findOne({ _id: req.params.id }).then((message) => {
      res.send(message);
    });
  });
});

// delete a message i the db
router.delete("/messages/:id", (req, res, next) => {
  Message.findByIdAndRemove({ _id: req.params.id }).then((message) => {
    res.send(message);
  });
});

module.exports = router;
