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
    database: "react_sql"
});

connection.connect(err => {
    if (err) {
        return err;
    }
})

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

class Fire extends Component {



    createGame = () => {
        const newGame = {
            p1_token: TokenU.token(),
            p2_token: TokenU.token()
        };

        const game = firebase.database().ref("games").push();

        game
            .set(newGame)
            .then(() => {
                window.location.hash = `#/${newGame.p1_token}`;
            }, (err) => {
                throw err;
            });
    }
    render() {
        return (

            <div className='view row'>
                <div className='column column-50 column-offset-25' style={{ textAlign: 'center' }}>
                    <h3>Create a New Game</h3>
                    <button onClick={createGame}>Create a New Game</button>
                </div>
            </div>
        )
    }

}