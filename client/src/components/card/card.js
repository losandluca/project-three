import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card" id="playerCard">
            <div className="card-body" id={props.id}>
                <h5 className="card-title" >{props.playerName}</h5>
                <p className="card-text" >{props.title}</p>
                <hr></hr>
                <img alt={props.img} src={props.img} className="card-img-top" alt="card"></img>
            </div>
            <div className="card-footer">
                <small className="text-muted">Health: {props.health} | Attack: {props.attack}</small>
            </div>
        </div>
    )
}

export default Card;