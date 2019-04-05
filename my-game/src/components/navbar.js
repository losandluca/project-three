import React from "react";

import "../styles/navbar.css";


function Navbar() {
    return (

        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Are You Ready?</h5>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Friend Zone. <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Login / Sign In.</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Battle Field.</a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
            <h4> Friend Zone</h4>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                   
                </button>
            </nav>
        </div>
    );
};

export default Navbar;