import React, {Component} from "react";
import Jumbotron from "../components/jumbotron"
import "../index.css";
import"../components/start/start.css";
import Facebook from "../components/Facebook";
// import Register from "../components/signUp";
// import Start from "../components/start";


class Home extends Component {

  render() {
    return (
  <div className="container">
    <Jumbotron />
      <h1> Lets Get Started</h1>
    <Facebook /> 
      <h3> Or.</h3>
      <a href="/register"><button type="button" className="btn btn-secondary btn-lg">Sign In / Or Sign Up</button></a>
  </div>
  )
    }
};
 
export default Home;
