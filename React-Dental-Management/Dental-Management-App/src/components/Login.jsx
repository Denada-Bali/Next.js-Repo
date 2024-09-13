import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import "/src/App.css"

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isHuman, setIsHuman] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!isHuman) {
            setError('Please confirm you are not a robot!');
            return;
        }

        if (username === 'doctor' && password === '1234') {
            setIsAuthenticated(true);
            setError('');
            navigate('/appointmentForm');
        } else {
            setError('Incorrect username or password!');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ReCAPTCHA
                    sitekey='6LcQJT8qAAAAAHUC16yw77JQ5lsoxLF7VX_3-gMK'
                    onChange={(val) => setIsHuman(val)}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
