import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>The Dentist</h1>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li><Link to="/create-reservation">Create Reservations</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;