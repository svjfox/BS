import React, { useEffect, useState } from 'react';
import { getAppointments, createAppointment } from '../api';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ clientId: '', barberId: '', appointmentTime: '', status: '' });

    useEffect(() => {
        getAppointments().then(response => setAppointments(response.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createAppointment(newAppointment).then(response => {
            setAppointments([...appointments, response.data]);
            setNewAppointment({ clientId: '', barberId: '', appointmentTime: '', status: '' });
        });
    };

    return (
        <div>
            <h1>Appointments</h1>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.clientId}>{appointment.clientId} - {appointment.barberId} - {appointment.appointmentTime}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Client ID" value={newAppointment.clientId} onChange={(e) => setNewAppointment({ ...newAppointment, clientId: e.target.value })} required />
                <input type="text" placeholder="Barber ID" value={newAppointment.barberId} onChange={(e) => setNewAppointment({ ...newAppointment, barberId: e.target.value })} required />
                <input type="text" placeholder="Appointment Time" value={newAppointment.appointmentTime} onChange={(e) => setNewAppointment({ ...newAppointment, appointmentTime: e.target.value })} required />
                <input type="text" placeholder="Status" value={newAppointment.status} onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })} required />
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentList;