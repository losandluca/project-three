import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Battle from "./pages/battle";

import './App.css';



function App() {
    return (
    <Router>
      <div className="App">
        <h1>Battle Page</h1>
          <hr></hr>    
        <div className="container">
            <br></br>
        {/* <Route exact path="/lobby" component={Lobby} /> */}
        <Route exact path="/battle" component={Battle} />
        </div>
      </div>
    </Router>   
    );
}

export default App;
