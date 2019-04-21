import React from "react";
import "./style.css";
import Card from "../card";
import image from '../../image.json';

class Deck extends React.Component {

    state = {
         //Set state to image.json
        image,
    
  
    }

    render() {
        return (
        <div id="two"> 
            <div className="deck mx-auto">
                <h3>My Deck</h3>
                <div className="card-group row">
                {this.state.image.map(cards =>(
                    <div className='col-sm-3'>
                        <Card
                        id={cards.id}
                        playerName={cards.playerName}
                        title={cards.title}
                        img={cards.img}
                        health={cards.health}
                        attack={cards.attack}
                        />
                        <hr></hr>
                    </div>   
                    ))}
                    </div>
                <br></br>
            </div>
        </div>
        )
    }
}

export default Deck;