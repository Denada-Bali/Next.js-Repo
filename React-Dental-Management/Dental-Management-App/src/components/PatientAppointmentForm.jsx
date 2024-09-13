import React, { useState } from 'react';

const PatientAppointmentForm = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [appointments, setAppointments] = useState([]);
    const availableDates = [
        '2024-09-15',
        '2024-09-16',
        '2024-09-17',
        '2024-09-18',
        '2024-09-19',
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedDate) {
            setAppointments([...appointments, selectedDate]);
            alert('Appointment booked for ' + selectedDate);
            setSelectedDate('');
        } else {
            alert('Please select a date.');
        }
    };

    return (
        <div className="appointment-form-container">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="appointment-date">Select a date:</label>
                <select
                    id="appointment-date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}>

                    <option value="">--Choose a date--</option>
                    {availableDates.map((date) => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
                <button type="submit">Book Appointment</button>
            </form>
            <div className="appointments-list">
                <h3>Your Appointments</h3>
                <ul>
                    {appointments.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PatientAppointmentForm;
