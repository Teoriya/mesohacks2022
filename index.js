const EventEmitter = require('events');
var client = new EventEmitter();
module.exports = client;
const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
  app = express().use(body_parser.json()); // creates express http server

//mongoconnection
require('dotenv').config();
const dbURL = process.env.DBURL;
const mongoose = require("mongoose");
mongoose.connect(dbURL, {}).then(console.log('Connected to mongodb!'))

//routes
const userRoute = require('./routes/userRoute');
const whatsappRoute = require("./routes/whatsappRoute")
app.use("/user", userRoute);
app.use("/whatsapp",whatsappRoute)

//insantiating all userflows
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'userflows');
fs.readdir(directoryPath, function(err, files) {
  if (err) {
    return console.log('Unable to scan userflow directory: ' + err);
  }
  files.forEach((file) => {
    require(path.join(directoryPath, file));
  });
});
//Frontend for server side :-P
app.get("/", (req, res) => { res.send("NO Frontend , LOL :-P") })

app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));// Sets server port and logs message on success
