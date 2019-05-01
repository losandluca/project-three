import React from "react";
import "./jumbotron.css";



function Jumbotron () {
    return (
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container">
          <h1>Welcome to the Friend Zone!</h1>
            <p className="lead">This is the place where souls go and never comeback. 
              In the Friend Zone will have the ability to battle friends in a card game
              & battle them to the death. You will be able to invite your friends via Facebook, Gmail,
              or request friends to join after you create a player card through our sign up method. Best of luck and Battle On! 
            </p>
        </div>
      </div>
    );
};

export default Jumbotron;