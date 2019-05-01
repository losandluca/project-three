import React from "react";
import "./style.css";

function Navbar(props) {

    return (
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand mx-auto centered" href="#" id="title">Friend Zone</a>
                    <h4 id="who">
                        User's username{props.username}
                    </h4> 
                <a href="/"><button className="btn btn-outline-warning" type="button">Log Out?</button></a>
            </nav>
        </div>
    )

};

export default Navbar;