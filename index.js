const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const cors = require("cors");
//const bodyParser = require("body-parser");

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://user:admin@mqtt-server.lg9nt.mongodb.net/MQTT-DB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB", err));

mongoose.Promise = global.Promise;

const app = express();

app.use(cors());

app.use(express.json());

// Initialize routes
app.use("/api", routes);

// error handling middleware
app.use((err, req, res, next) => {
  //console.log(err)
  res.status(422).send({
    error: err.message,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Listening on port: " + PORT + "...");
});
