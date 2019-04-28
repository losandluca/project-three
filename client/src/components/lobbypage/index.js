import React, { Component } from "react";
import FriendManage from "../FriendManage";
import Deck from "../deck";
import Wrapper from "../wrapper";
import Navbar from "../navbar";

class Lobby extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: null,
            user: {},
            online: false
        };
      }

    clickedFriendDiv = () => {
    console.log("clicked");
    }


    // componentDidMount() {
    //     API.existingUser(this.props.match.params.id)
    //       .then(res => this.setState({ user: res.data }))
    //       .catch(err => console.log(err));
    //   };


    render() {
        return (
            <div>
                <Navbar />
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