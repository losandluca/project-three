import React, { Component } from 'react';
import firebase from './client/src/config/firebase'

const { firebase } = window;

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
})

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

  });

