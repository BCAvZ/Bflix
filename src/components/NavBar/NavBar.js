import React from 'react';
import "./NavBar.css"
import {NavLink} from "react-router-dom";
import bflixlogo from "../../assets/pictures/BFLIX-30-9-2023.png"

export function NavBar() {
    return (
        <nav>
            <ul>
                <li className="imageWrapper">
                    <NavLink to="/">
                        <img src={bflixlogo} alt = "logo"/>
                    </NavLink>
                </li>
                <li className="homeButton">
                    <NavLink to="/">Home</NavLink></li>
                <li>
                    <NavLink to="/SearchResult">Search</NavLink>
                </li>
            </ul>
        </nav>
    );
}