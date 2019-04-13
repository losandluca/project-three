import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Battle from "./pages/battle";
import Lobby from "./pages/lobby";
import Home from "./pages/home";
import './App.css';
import Register from './pages/register';



function App() {
    return (
    <Router>
      <div className="App"> 

        <div className="container-fluid app">
        <Route exact path="/lobby" component={Lobby} />

      <Route exact path ="/home" component= {Home} />

            {/* <br></br> */}
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/register" component ={Register}/>
        </div>
      </div>
    </Router>   
    );
}

export default App;
