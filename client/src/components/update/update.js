import React from "react";
import "./style.css";

function Update (props) {
    return (
        <div id="one">
            <div className="col grid-item" id="left2" onClick={() => props.clickedDiv(props.id)}>Update Your Card</div>
        </div>
    )
}


export default Update;