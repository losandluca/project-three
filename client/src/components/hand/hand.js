import React from "react";
import "./style.css";

class Hand extends React.Component {
    render() {
        return (

        <div className="container" id="hand">
        <p>The player's hand</p>
            <div className="card-group justify-content-center">
                <div className="card col-lg-4" id="playerCard">
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                            <hr></hr>
                            <img src="..." className="card-img-top" alt="card"></img>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>

                <div className="card col-lg-4" id="playerCard">
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                            <hr></hr>
                            <img src="..." className="card-img-top" alt="card"></img>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>

                <div className="card col-lg-4" id="playerCard">
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                            <hr></hr>
                            <img src="..." className="card-img-top" alt="card"></img>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>

                <div className="card col-lg-4" id="playerCard">
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
                                <hr></hr>
                            <img src="..." className="card-img-top" alt="card"></img>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted">Player's Attack & Health Stats</small>
                    </div>
                </div>

                <div className="card col-lg-4" id="playerCard">
                        <div className="card-body">
                            <h5 className="card-title">Player's Name</h5>
                            <p className="card-text">Players short description</p>
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
export default Hand;