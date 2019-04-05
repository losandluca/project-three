import React, {Component} from "react";
import Navbar from "./components/navbar.js";
import Jumbotron from "./components/jumbotron";
import StartButton from "./components/start.js";
import Footer from "./components/footer.js";
import './styles/navbar.css';
import './index.css';
import './styles/start.css';
import './styles/jumbotron.css';

// import {External Content} from "bootstrap";

class App extends Component {
  render() {
    return (
  <div className="container">
     <Navbar />
     <hr></hr>
    <Jumbotron />
    <br></br>
    <StartButton />
    <br></br>
    <Footer />
     </div>
  )
    }
};
 

export default App;
