import React from 'react';
import ClientList from './components/ClientList';
import BarberList from './components/BarberList';
import AppointmentList from './components/AppointmentList';

function App() {
    return (
        <div>
            <h1></h1>
            <ClientList />
            <h1></h1>
            <BarberList />
            <h1></h1>
            <AppointmentList />
        </div>
    );
}

export default App;
