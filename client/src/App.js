import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Battle from "./components/battlepage";
import Lobby from "./components/lobbypage";
import Home from "./components/homepage";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
          <Switch>
              <div className="App"> 
                <div className="container-fluid app">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/lobby/:id" component={Lobby} />
                  <Route exact path="/battle/:id" component={Battle} />
                </div>
              </div>
          </Switch> 
      </Router>   
    );
  };

};

export default App;
