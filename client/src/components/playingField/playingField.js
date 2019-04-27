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
                <div className="card col-lg-4 centered card" id="playerCard"></div>
                    
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