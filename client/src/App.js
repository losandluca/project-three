import React, { Component } from 'react';
import Score from "./components/scoreBar";
import Stage from "./components/playingField";
import Hand from "./components/hand";
import './App.css';

class App extends Component {

  // state = {
  // cards = [],
  // player1Health = 1000,
  // player2Health = 1000
  // timer = 3:00
  // };


  render() {
    return (
      <div className="App">
        <h1>Battle Page</h1>
          <hr></hr>    
        <div className="container">
          <Score />
            <br></br>
          <Stage /> 
            {/* <br></br> */}
          <Hand />
        </div>
      </div>
    );
  }
}

export default App;
