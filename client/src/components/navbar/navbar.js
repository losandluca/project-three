import React from "react";
import "./style.css";

class Navbar extends React.Component {

    render() {
        return(
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Are You Ready?</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Login / Sign In.</a>
                        </li>
                    </ul>    
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mx-auto" href="/" id="title">Friend Zone</a>
            </nav>
        </div>
        )
    }
}

export default Navbar;