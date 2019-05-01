import React from "react";
import "./style.css";


function Message(props) {
        return (
            <div id="one">
                <div className="col grid-item" id="left3" onClick={() => props.clickedDiv(props.id)}>Messages</div>
            </div>
        )
    }


export default Message;