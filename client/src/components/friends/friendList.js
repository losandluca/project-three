import React from "react";
import "./style.css";

function Friends(props) {

    return (
        <div id="one">
            <div className="col grid-item" id="left1">
            <h4>Registered Users | View Friends</h4>
                {props.users.map(people => (
                    <ul>
                        <hr className="hr"></hr>
                        <li>{people.username} - Online | Add Friend | Remove Friend | Play A Game? </li>
                        <hr className="hr"></hr>
                    </ul>
                ))}
            </div>
        </div>
    )

};


export default Friends;