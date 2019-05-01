import React, { Component } from "react";
import Score from "../scoreBar";
import Stage from "../playingField";
import Hand from "../hand";
import { databaseBase, firebase } from 'base'

class Battle extends Component {

    state = {
        cardsInDeck: [], //array to hold the cards currently in deck
        player1Health: 1000,
        player2Health: 1000,
        timer: 0,
        cardDeckOne: 0, //# of cards still in the in deck
        cardDeckTwo: 0,
        cardsInHand: [], //current cards in players hand
        cardsUsed: [],  //cards user has already played
        firebaseData: [],
        playerOneExists: false,
        playerTwoExists: false,
        key: " " //assign playerOne or playerTwo as key value for battle
    };

    // componentDidMount() {
    //     databaseBase.syncState('/game', {
    //         context: this,
    //         state: 'firebaseData',
    //         asArray: true,
    //         keepKeys: true,
    //     });
    // }

    battleClick = event => {
        event.preventDefault();
        console.log("clicked");
        
    }

    render() {
            console.log(this.state.firebaseData);
            return (
                <div>
                    <h2>Battle Page</h2>
                    <hr></hr>
                    <Score player1Health={this.state.player1Health} player2Health={this.state.player2Health} cardDeckOne={this.state.cardDeckOne} cardDeckTwo={this.state.cardDeckTwo} timer={this.state.timer} />
                    <br></br>
                    <Stage />
                    <Hand />
                </div>
            )
        }
    }

    export default Battle;