import React, { Component } from "react";
// import API from "../utils/API";
// import "/index.css";
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
          {/* <a href="/register"><button type="button" className="btn btn-secondary btn-lg">Sign In / Or Sign Up</button></a> */}
        <div className = "form">
            <h1>Already a member ?</h1>
        <Login />
            
            <h2>Register to get started!</h2>
        <Signup />
        </div>
      </div>
      )
    }
};

export default Home;

