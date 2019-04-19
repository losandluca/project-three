import React from "react";
import Card from "../card";
import image from "../../image.json"
import "./style.css";

class Stage extends React.Component {

    state = {
        image
    }

    render() {
// function Stage(props) {
        return (
            <div className="container-fluid">
                <div className="split left">
                <p>Player 1/Card in play</p>
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

                    {/* <div className="card" id="playerCard">
                        <div className="card-body" id={props.id}>
                            <h5 className="card-title" >{props.playerName}</h5>
                            <p className="card-text" >{props.title}</p>
                            <hr></hr>
                            <img alt={props.img} src={props.img} className="card-img-top" alt="card"></img>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Health: {props.health} | Attack: {props.attack}</small>
                        </div>
                    </div> */}

                    {/* {this.state.image.map((cardInPlay, index) => (
                    <div className="col-sm-3" key={index}>
                        <Card 
                        playerName={cardInPlay.playerName}
                        title={cardInPlay.title}
                        img={cardInPlay.img}
                        health={cardInPlay.health}
                        attack={cardInPlay.attack}
                        />
                    </div>   
                    ))}  */}
                </div>

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
            </div>
        )
    }
}

export default Stage;