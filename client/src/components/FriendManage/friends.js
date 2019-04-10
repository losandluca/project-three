import React from "react";
import "./style.css";

class FriendManage extends React.Component {
    render() {
        return (
            <div id="block">
                <div className="row one">
                    <div className="col" id="left1">Add/Delete A Friend</div>
                    <div className="col" id="left2">Update Your Card</div>
                    <div className="col" id="left3">Messages/Chat</div>
                </div> 
            </div>
        )
    }
}

export default FriendManage;