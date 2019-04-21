import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Battle from "./pages/battle";
import Lobby from "./pages/lobby";
import Home from "./pages/home";
import Register from './pages/register';
import Navbar from "./components/navbar";
// import defaultCards from "./image.json";
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
      <div className="App"> 
        <div className="container-fluid app">
          <Route exact path="/" component={Home} />
          <Route exact path="/lobby/:id" component={Lobby} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
  </Router>   
  );
  }
}

export default App;
