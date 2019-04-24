import React, { Component } from "react";
import API from "../utils/API";
import FriendManage from "../components/FriendManage";
import Deck from "../components/deck";
import Wrapper from "../components/wrapper";
// import Update from "../components/update";


class Lobby extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: null,
            user: {}
        };
      }

    clickedFriendDiv = () => {
    console.log("clicked");
    }


    componentDidMount() {
        API.existingUser(this.props.match.params.id)
          .then(res => this.setState({ user: res.data }))
          .catch(err => console.log(err));
      };


    render() {
        return (
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
        )
    };
};

export default Lobby;