import React from "react";
import "./style.css";

class FriendManage extends React.Component {
    render() {
        return (
            <div id="one">
                <div className="col" id="left1">Add/View/Delete Friends</div>
                <div className="col" id="left2">Update Your Card</div>
                <div className="col" id="left3">Messages/Chat</div>
            </div> 
        )
    }
}

export default FriendManage;