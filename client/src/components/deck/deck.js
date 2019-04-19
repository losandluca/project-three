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
                    
                   
                        {/* <div className="card col-lg-4" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>  
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>     
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>  */}
                        {/*lines 11-21 would be a prop */}
                        {/* <div className="card col-lg-4" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
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
                                    <p className="card-text">Players title</p>
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
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="card-group">
                        <div className="card col-lg-4" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
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
                                    <p className="card-text">Players title</p>
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
                                    <p className="card-text">Players title</p>
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
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="card-group">
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                    <hr></hr>
                                <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="card-group">
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                    <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                        <div className="card" id="playerCard">
                                <div className="card-body">
                                    <h5 className="card-title">Player's Name</h5>
                                    <p className="card-text">Players title</p>
                                        <hr></hr>
                                    <img src="..." className="card-img-top" alt="card"></img>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Player's Attack & Health Stats</small>
                            </div>
                        </div>
                    </div> */}
                    <br></br>
            </div>
        </div>
        )
    }
}

export default Deck;