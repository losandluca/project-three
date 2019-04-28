import React from "react";
import "./style.css";

class Navbar extends React.Component {

    state = {
        online: false //is the user online 
    };

    render() {
        return(
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand mx-auto centered" href="/" id="title">Friend Zone</a>
                <h4 id="who">
                User's name
                </h4> 
                <button class="btn btn-outline-warning" type="button"><a href="/"></a>Log Out?</button>
            </nav>
        </div>
        )
    }
}

export default Navbar;