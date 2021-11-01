/*const mqtt = require("mqtt");

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

const topic = "markus/messages";
client.on("connect", () => {
  console.log("Connected");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});
*/
/*
function subscribe() {
  client.on("message", (topic, payload) => {
    console.log("Received Message:", topic, payload.toString());
  });
}*/
/*
function subscribe() {
  client.on("message", (topic, payload) => {
    return payload.toString();
  });
}

client.on("connect", () => {
  client.publish(
    topic,
    "nodejs mqtt test",
    { qos: 0, retain: false },
    (error) => {
      if (error) {
        console.error(error);
      }
    }
  );
});

const mqttFunctions = { subscribe };

module.exports = mqttFunctions;
*/
