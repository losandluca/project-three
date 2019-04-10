import React, { Component } from "react";
import Score from "../components/scoreBar";
import Stage from "../components/playingField";
import Hand from "../components/hand";


class Battle extends Component {

    // state = {
    // cards = [],
    // player1Health = 1000,
    // player2Health = 1000
    // timer = 3:00
    // }; 

    render() {
        return (
            <div>
                <h2>Battle Page</h2>
                <hr></hr>
                <Score />
                    <br></br>
                <Stage />
                <Hand />
            </div>
        )
    }
}

export default Battle;