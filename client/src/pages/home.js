import React, {Component} from "react";
import Jumbotron from "../components/jumbotron"
// import StartButton from "../components/start";
// import facebook from "../components/social/facebook-config";
import "../index.css";
import"../components/start/start.css";
import Facebook from "../components/Facebook";


class Home extends Component {

  render() {
    return (
  <div className="container">
    <Jumbotron />
    <br></br>
      <h1> Lets Get Started</h1>
      <Facebook /> 
        <h3> Or.</h3>
        <button type="button" class="btn btn-secondary btn-lg">Sign In / Or Sign Up</button>
        <a href="./register.js"></a>
  </div>
  )
    }
};
 
export default Home;
