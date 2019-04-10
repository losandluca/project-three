import React from "react";
import "./style.css";

class FriendManage extends React.Component {
    render() {
        return (
            <div id="one">
                <div className="col-md shadow-md" id="left1">Add/Delete A Friend</div>
                <div className="col-md shadow-md" id="left2">Update Your Card</div>
                <div className="col-md shadow-md" id="left3">Messages/Chat</div>
            </div>  
        )
    };
}

export default FriendManage;