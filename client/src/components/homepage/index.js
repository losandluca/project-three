import React, { Component } from "react";
import Jumbotron from "../jumbotron"
import Facebook from "../Facebook";
import Login from "../login/login";
import Signup from "../signUp/signUp";

class Home extends Component {

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <h1> Lets Get Started</h1>
        <Facebook /> 
          <br></br>
        <div className = "form">
            <h1>Already a member ?</h1>
          <Login /> 
            <h2>Register to get started!</h2>
          <Signup />
        </div>
    </div>
    )
  };

};

export default Home;