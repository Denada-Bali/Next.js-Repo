import React from 'react';
import { Link } from 'react-router-dom';
import '/src/navbar.css';

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/appointmentForm">Appointments</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
