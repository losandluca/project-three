import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Battle from "./components/battlepage";
import Lobby from "./components/lobbypage";
import Home from "./components/homepage";
import Navbar from "./components/navbar";
// import Game from './Game';
import './App.css';

class App extends React.Component {

  state = {
    online: false //is the user online 
  };


render() {
  return (
    <Router>
      <Navbar online={this.state.online} />
      <Switch>
          <div className="App"> 
            <div className="container-fluid app">
              <Route exact path="/" component={Home} />
              <Route exact path="/lobby" component={Lobby} />
              <Route exact path="/battle" component={Battle} />
            </div>
          </div>
      </Switch> 
    </Router>   
  );
  }
}

export default App;
