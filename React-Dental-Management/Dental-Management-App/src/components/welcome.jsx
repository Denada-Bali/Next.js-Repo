import React from 'react';
import { Link } from 'react-router-dom';
import "/src/App.css"

const Welcome = () => {
    return (
        <div className="welcome-container">
            <a><Link to="/login">Login as Doctor</Link></a>
            <a><Link to="/patientLogin">Login as Patient</Link></a>
        </div>
    );
};

export default Welcome;
