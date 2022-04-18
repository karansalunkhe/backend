var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

const routes = require("./routes/routes");
const port = 3300;

app.use(cors());

app.use(bodyparser.json());

app.use("/api", routes);

mongoose.connect("mongodb://localhost:27017/orderlist");

mongoose.connection.on("connected", () => {
  console.log("Connected to database mongodb @ 27017");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in Database Connection : " + err);
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Response from 'server'...!</h1>");
});

app.listen(port, () => console.log("Server started at port: " + port));


// visit to see products info ->  http://localhost:3300/api/orders