import React, { Component } from 'react';
import Firebase from './client/src/config/firebase'


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



