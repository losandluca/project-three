import React, {Component} from "react";
import Jumbotron from "../components/jumbotron"
// import StartButton from "../components/start";
// import facebook from "../components/social/facebook-config";
import "../index.css";
import"../components/start/start.css";
import Facebook from "../components/Facebook";




// import {External Content} from "bootstrap";

class Home extends Component {
  render() {
    return (
  <div className="container">
    <Jumbotron />
    <br></br>
    <h1> Lets Get Started</h1>
    <Facebook /> 
  
     </div>
  )
    }
};
 

export default Home;