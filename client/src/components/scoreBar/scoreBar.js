import React from "react";
import "./style.css";

class Score extends React.Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 col-centered" id="scoreBar">player 1 score: 1000/cards in deck: # | Timer | player 2 score: 1000/cards in deck: #</div>
            </div>
        )
    }
}

export default Score;