import React from "react";
import "./style.css";

class Hand extends React.Component {
    render() {
        return (
        <div className="container" id="hand">
        <p>The player's hand</p>
            <div className="card-group">
                <div className="card col-lg-2" id="playerCard">
                    <img src="..." className="card-img-top" alt="card image"></img>
                        <hr></hr>
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>
                <div className="card col-lg-2" id="playerCard">
                    <img src="..." className="card-img-top" alt="card image"></img>
                        <hr></hr>
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>
                <div className="card col-lg-2" id="playerCard">
                    <img src="..." className="card-img-top" alt="card image"></img>
                        <hr></hr>
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>
                <div className="card col-lg-2" id="playerCard">
                    <img src="..." className="card-img-top" alt="card image"></img>
                        <hr></hr>
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>
                <div className="card col-lg-2" id="playerCard">
                    <img src="..." className="card-img-top" alt="card image"></img>
                        <hr></hr>
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
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
export default Hand;