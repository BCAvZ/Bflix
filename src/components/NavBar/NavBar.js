import React from 'react';
import "./NavBar.css"
import {NavLink} from "react-router-dom";
import BFLIXLOGO from "../../assets/pictures/BFLIX-30-9-2023.png"

export function NavBar() {
    return (
        <nav>
            <ul>
                <li className="imageWrapper">
                    <NavLink to="/"><img src={BFLIXLOGO} alt = "logo"/></NavLink>
                </li>
                <li className="homeButton"><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/SearchResult">Search Result</NavLink></li>
            </ul>
        </nav>
    );
}