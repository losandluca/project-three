import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Battle from "./pages/battle";
import Lobby from "./pages/lobby";
import Home from "./pages/home";
<<<<<<< HEAD
// import Game from './Game';
import './App.css';
=======
>>>>>>> a01219d5b99b27357a160915d9a135cee3bcb707
import Register from './pages/register';
import Navbar from "./components/navbar";
import defaultCards from "./image.json";
import './App.css';



function App() {

  return (
  <Router>
    <Navbar />
      <div className="App"> 
        <div className="container-fluid app">
          <Route exact path="/" component={Home} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
  </Router>   
  );
}

export default App;
