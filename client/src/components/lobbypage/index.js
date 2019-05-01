import React from "react";
import FriendManage from "../FriendManage";
import Deck from "../deck";
import Wrapper from "../wrapper";
import Navbar from "../navbar";
import API from "../../utils/API";

class Lobby extends React.Component {

    state = {
        cards: null,
        user: {},
        username: "", //show username of user for navbar
        online: false //show is user is online
    };
      

    clickedFriendDiv = () => {
    console.log("clicked");
    }

    componentDidMount() {
        this.userLoggedIn();
    }

    userLoggedIn() {
        console.log("hitting userLogged in");
        API.onlineUser({
            username: this.state.username
        })
          .then(res => this.setState({ username: res.data }))
          .catch(err => console.log(err));
    }; //to show which user is logged in with their username in navbar


    render() {
        return (
            <div>
                <Navbar username={this.state.username}/>
                <div>
                    <h2>Lobby</h2>
                    <hr></hr>
                    <Wrapper>
                        <div className="container-fluid lobby">
                            <div className="row justify-content-center">
                                <FriendManage clickedFriendDiv={this.clickedFriendDiv}/>
                                <Deck friends={this.state.cards}></Deck>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
        )
    };

};

export default Lobby;