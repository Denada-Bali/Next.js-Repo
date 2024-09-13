import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './components/welcome';
import Login from './components/Login';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Navbar from './components/Navbar';
import PatientLogin from './components/PatientAppointmentForm';
import './App.css';
import '/src/navbar.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [appointments, setAppointments] = useState([]);

    // Handle appointment management
    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const deleteAppointment = (index) => {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1);
        setAppointments(updatedAppointments);
    };

    const editAppointment = (index, editedName, editedDate) => {
        const updatedAppointments = [...appointments];
        updatedAppointments[index] = { name: editedName, date: editedDate };
        setAppointments(updatedAppointments);
    };

    const clearAppointments = () => {
        setAppointments([]);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login"element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
                <Route path="/patientLogin" element={<PatientLogin />}/>
                <Route
                    path="/appointmentForm"
                    element={
                        isAuthenticated ? (
                            <div>
                                <Navbar handleLogout={handleLogout} />
                                <div className="content-container">
                                    <AppointmentForm addAppointment={addAppointment} />
                                    <AppointmentList
                                        appointments={appointments}
                                        deleteAppointment={deleteAppointment}
                                        clearAppointments={clearAppointments}
                                        editAppointment={editAppointment}
                                    />
                                </div>
                            </div>
                        ) : (<Navigate to="/" replace />) //kur bej logout
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
