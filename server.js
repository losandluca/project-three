<<<<<<< HEAD
// import firebase from './client/src/config/firebase'

// const { firebase } = window;

var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
//
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");
//
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
//
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
=======
import React, { Component } from 'react';
import firebase from './client/src/config/firebase'

const { firebase } = window;

const passport = require("./config/passport");
const express = require("express");
const mysql = require("mysql");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "friend-zone"
});

app.post('./client/src/components/signUp/signUp.js', function(req, res) {
  var user = req.body;
  var query = connection.query('INSERT INTO users SET ?',  user, function(err, result) {
  });
  res.end('Success');
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

  });

>>>>>>> a4e3e32c9be290fefa871ad5471942a0aa11012b
