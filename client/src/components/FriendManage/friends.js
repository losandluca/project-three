import React from "react";
import Update from "../update";
import Friends from "../friends";
import Messages from "../message";
import "./style.css";


class FriendManage extends React.Component {

    clickedDiv = () => {
        console.log("clicked");
        }

    render() {
        return (
            <div id="one">
                <Friends clickedDiv={this.clickedDiv}/>
                <Update clickedDiv={this.clickedDiv}/>
                <Messages clickedDiv={this.clickedDiv}/>
            </div> 
        )
    }
}

export default FriendManage;