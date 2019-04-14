import React, {Component} from "react";
// import { BrowserRouter } from 'react-router-dom';
import Register from "../signUp";


class Start extends Component {
render() {
    return (
        <div class = "container">
        <button type="button" class="btn btn-secondary btn-lg">
        <a class="nav-link text-white" href="Register" >Login / Sign In.</a>
        </button>
         </div>

    );
  }
}

export default Start;




