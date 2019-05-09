import React from "react";
import Update from "../update";
import Friends from "../friends";
import Messages from "../message";
import API from "../../utils/API";
import "./style.css";


class FriendManage extends React.Component {

    state = {
        users: [], //all registered users in the db
        username: "", //user's username
        online: false //show who's currently online & who's not
    };

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = () => {
        API.allUsers().then(res => {
            let currentUser = localStorage.getItem("playerId");
            let filteredArr = res.data.filter(user => user.id != currentUser);
            console.log(filteredArr);
            this.setState({ users: filteredArr })}
        ).catch(err => console.log(err));
    }; //loads all users registered to the db except for user who's logged on

    clickedDiv = () => {
        console.log("clicked");
    };

    render() {
        return (
            <div>
                <h2>Management</h2>
                    <div id="one">
                        <Friends users={this.state.users}/>
                        <Update clickedDiv={this.clickedDiv}/>
                        <Messages clickedDiv={this.clickedDiv}/>
                    </div> 
            </div>    
        )
    };
};

export default FriendManage;