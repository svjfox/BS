import React, { useEffect, useState } from 'react';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        clientId: '',
        barberId: '',
        appointmentTime: '',
        status: '',
    });

    useEffect(() => {
        fetch('/appointments')
            .then((res) => res.json())
            .then((data) => setAppointments(data))
            .catch((err) => console.error('Error fetching appointments:', err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAppointment),
        });
        if (response.ok) {
            setAppointments([...appointments, newAppointment]);
            setNewAppointment({ clientId: '', barberId: '', appointmentTime: '', status: '' });
        }
    };

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map((appt) => (
                    <li key={appt.id}>{appt.clientId} - {appt.barberId} - {appt.appointmentTime} - {appt.status}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Client ID" value={newAppointment.clientId} onChange={(e) => setNewAppointment({ ...newAppointment, clientId: e.target.value })} required />
                <input type="text" placeholder="Barber ID" value={newAppointment.barberId} onChange={(e) => setNewAppointment({ ...newAppointment, barberId: e.target.value })} required />
                <input type="datetime-local" placeholder="Appointment Time" value={newAppointment.appointmentTime} onChange={(e) => setNewAppointment({ ...newAppointment, appointmentTime: e.target.value })} required />
                <input type="text" placeholder="Status" value={newAppointment.status} onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })} required />
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentList;