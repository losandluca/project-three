import React, { Component } from "react";
import FriendManage from "../components/FriendManage";
import Deck from "../components/deck";
// import Update from "../components/update";

class Lobby extends Component {

    // state = {

    // }

    render() {
        return (
            <div>
                <h2>Lobby</h2>
                <hr></hr>
                <div>
                <FriendManage />
                {/* <Update /> */}
                <Deck />
                </div>
            </div>
        )
    }
}

export default Lobby;