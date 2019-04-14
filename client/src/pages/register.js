import React, { Component } from "react";
import "../index.css";
// import Login from "../components/login/login";
// import Signup from "../components/signUp/signUp";


class Register extends Component {
    render(){
        return(
            <div className = "form">
            <h1>Already a member ?</h1>
            {/* <Login /> */}
            <br></br>
            <h2> If not lets get started!</h2>
            {/* <Signup /> */}
            <br></br>
            </div>
        )
    }
};

export default Register;