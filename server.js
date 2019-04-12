import React, { Component } from 'react';
import Firebase from './client/src/config/firebase'

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
    database: "react_sql"
});

connection.connect(err => {
    if(err) {
        return err;
    }
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  
  class Fire extends Component {

    state = {
        playerOneExists: false,
        PlayerTwoExists: false,
        online: false,
        // playerOneStartPoints: 1000,
        // playerTwoStartPoints: 2000,
        currentPlayerTurn: null,
        playersInGame: null,

    }

    //add user to 
    handleOnClick = event => {
        event.preventDefault();
        if (currentPlayers < 2) {
            if (playerOneExists) {
                playerNum = 2;
            } else {
                playerNum = 1;
            }
        }
    }
    render() {
        return (
            this.playerNum //not real thing just getting rid of error to save
        
    
        )
    }

}