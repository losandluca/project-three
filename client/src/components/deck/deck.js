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
        <div>
            <h2>My Deck</h2>
            <div id="two"> 
                <div className="deck mx-auto">  
                    <hr></hr>
                    <div className="card-group row">
                    {this.state.image.map(cards => (
                        <div className='col-sm-3' key={cards.id}>
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
        </div>
        )
    };

}

export default Deck;