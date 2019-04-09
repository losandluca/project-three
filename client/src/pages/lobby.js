import React, { Component } from "react";
import FriendManage from "../components/FriendManage";
import Deck from "../components/deck";
import Wrapper from "../components/wrapper";
// import Update from "../components/update";

class Lobby extends Component {

    // state = {

    // }

    render() {
        return (
            <div>
                <h2>Lobby</h2>
                    <hr></hr>
                <Wrapper>
                    {/* <div className="container lobby"> */}
                        <div className="row">
                            <FriendManage />
                            {/* <Update /> */}
                            <Deck /> 
                        </div>
                    {/* </div> */}
                </Wrapper>
            </div>
        )
    }
}

export default Lobby;