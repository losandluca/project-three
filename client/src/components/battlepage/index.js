import React, { Component } from "react";

import Card from "../../components/card/card";
import image from '../../../src/image.json'; //remove once database is connected, this is for testing purposes only

import Score from "../scoreBar";
import Stage from "../playingField";
import Hand from "../hand";
import { databaseBase, firebase } from '../../base'


class Battle extends Component {

    state = {

        cardsInDeck: image, //array to hold the cards currently in deck
        player1Health: 1000,
        player2Health: 1000,
        timer: 0,
        // cardDeckOne: 0, //# of cards still in the in deck
        // cardDeckTwo: 0,
        cardsInHand: [], //current cards in players hand
        cardChosen: {}, //this is the card that player 1 chooses in gameplay
        firebaseData: {},
        open: 1,
        join: 2,
        

    };
    //Firebase sync for game play
    componentDidMount() {
        databaseBase.syncState('/game', {
            context: this,
            state: 'firebaseData',
            asArray: true,
            keepKeys: true,
        });
        this.chooseHand(this.state.cardsInDeck)
    }

    //function to chose 5 random cards for the player to start with and also draws another random card to replace the chosen card

    chooseHand = (array) => {
        console.log("LENGTH OF THE ARRAY", array.length)
        let randomFive = this.state.cardsInHand
        if (randomFive.length < 5) {


            let randomItem = array[Math.floor(Math.random() * array.length)];
            randomFive.push(randomItem);

            let numbersLeft = array.filter(function (value, index, arr) {
                return value != randomItem;
            });
            this.setState({
                cardsInDeck: numbersLeft,
                cardsInHand: randomFive,
            }, () => {
                this.chooseHand(numbersLeft);
            }
            );

        }

    }

    //click function to handle game play that is run through chosing a card from your hand
    chooseCardOnClick = event => {

        event.preventDefault();
        let handCards = this.state.cardsInHand
        let cardId = event.target.id;
        
        
        let playerOne = this.firebaseData;
        console.log("ID CHOSEN: ", cardId)

        if(this.firebaseData === playerOne){
            handCards.forEach(card => {
                if (card.id == cardId) {
                    this.setState({
                        cardChosen: card
    
                    }, () => console.log("THIS IS THE CARD THAT THE PLAYER CHOSE: ", this.state.cardChosen))
                }

            })
            console.log("BEFORE THE FILTER: ", handCards)
    
            let cardsNowInHand = handCards.filter(function (value, index, arr) {
                return value.id != cardId;
            });
    
            console.log("IN HAND AFTER PICK: ", cardsNowInHand);
    
            this.setState({
                cardsInHand: cardsNowInHand
            }, () => {
                console.log("SETTING THE STATE OF THE FILTER", this.state.cardsInHand.length)
                this.chooseHand(this.state.cardsInDeck);
            });
        }else {

            handCards.forEach(card => {
                if (card.id == cardId) {
                    this.setState({
                        cardChosen: card
    
                    }, () => console.log("THIS IS THE CARD THAT THE PLAYER CHOSE: ", this.state.cardChosen))
                }
            })
            console.log("BEFORE THE FILTER: ", handCards)
    
            let cardsNowInHand = handCards.filter(function (value, index, arr) {
                return value.id != cardId;
            });
    
            console.log("IN HAND AFTER PICK: ", cardsNowInHand);
    
            this.setState({
                cardsInHand: cardsNowInHand
            }, () => {
                console.log("SETTING THE STATE OF THE FILTER", this.state.cardsInHand.length)
                this.chooseHand(this.state.cardsInDeck);
            });
    

        }

        
    }


    render() {
        console.log(this.firebaseData);
        
        
        return (
            <div>
                <h2>Battle Page</h2>
                <hr></hr>
                <Score player1Health={this.state.player1Health} player2Health={this.state.player2Health} cardDeckOne={this.state.cardDeckOne} cardDeckTwo={this.state.cardDeckTwo} timer={this.state.timer} />
                <br></br>
                {/* Player One Chosen Card */}
                <div className="container-fluid">
                    <div className="split left">
                        <div className="col-sm-4 playerOneCard">
                            <p>Player 1/Card in play</p>

                            <Card
                                id={this.state.cardChosen.id}
                                playerName={this.state.cardChosen.playerName}
                                title={this.state.cardChosen.title}
                                img={this.state.cardChosen.img}
                                health={this.state.cardChosen.health}
                                attack={this.state.cardChosen.attack}
                                bacon={this.chooseCardOnClick}
                            />
                        </div>
                    </div>
                </div>
                {/* Player two hand */}
                <div className="split right">
                    <p>Player 2/Card in play</p>
                    <div className="card col-lg-4 centered" id="playerCard">
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Player's title</p>
                            <hr></hr>
                            <img src="..." className="card-img-top" alt="card"></img>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Player's Attack & Health Stats</small>
                        </div>
                    </div>
                </div>
                {/* <Hand /> */}
                <div className="container" id="hand">
                    <p>Player Hand</p>
                    <div className="card-group row" id="cardsinhand">
                        {this.state.cardsInHand.map((cards, index) => (
                            <div className='col-sm-2 cardspace' key={index}>
                                <Card
                                    data-card={cards.cardId}
                                    id={cards.id}
                                    playerName={cards.playerName}
                                    title={cards.title}
                                    img={cards.img}
                                    health={cards.health}
                                    attack={cards.attack}
                                    bacon={this.chooseCardOnClick.bind(this)}
                                />
                                <hr></hr>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}
export default Battle;