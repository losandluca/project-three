import React from "react";
import Update from "../update";
import Friends from "../friends";
import Messages from "../message";
import API from "../../utils/API";
import "./style.css";


class FriendManage extends React.Component {

    state = {
        users: [],
        username: "",
        online: false
    };

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = () => {
        API.allUsers().then(res => this.setState({ users: res.data })
        ).catch(err => console.log(err));
    };

    clickedDiv = () => {
        console.log("clicked");
    };

    render() {
        return (
            <div id="one">
                <Friends />
                <Update clickedDiv={this.clickedDiv}/>
                <Messages clickedDiv={this.clickedDiv}/>
            </div> 
        )
    };
};

export default FriendManage;