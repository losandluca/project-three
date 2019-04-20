import React from "react";
import "./style.css";

function Friends(props) {
    return (
        <div id="one">
            <div className="col grid-item" id="left1" onClick={() => props.clickedDiv(props.id)}>Add/View/Delete Friends</div>
        </div>
    )
}


export default Friends;