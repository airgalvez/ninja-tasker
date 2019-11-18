// packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");

// starting express app
const app = express();

// setting view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing manager
app.use(routes);

db.sequelize.sync().then(function() {
  // server listeing for request
  app.listen(3000, function() {
    console.log("server is liT!!!!!!!");
  });
});
