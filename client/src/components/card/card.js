import React from "react";
import "./style.css";

function Card(props) {

    return (
        <div data-card={props.id} className="playerCard" id={props.id} onClick={props.bacon}>
            <div className="card" id={props.id}>
                <div className="card-body" id={props.id}>
                    <h5 className="card-title" id={props.id}>{props.playerName}</h5>
                    <p className="card-text" id={props.id}>{props.title}</p>
                    <hr></hr>
                    <img alt={props.img} src={props.img} className="card-img-top" alt="card" id={props.id}></img>
                </div>
                <div className="card-footer"id={props.id}>
                    <small className="text-muted" id={props.id}>Health: {props.health} | Attack: {props.attack}</small>
                </div>
            </div>
        </div>
    )
}

export default Card;