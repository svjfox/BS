import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClientList from './components/ClientList';
import BarberList from './components/BarberList';
import AppointmentList from './components/AppointmentList';

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/clients" element={<ClientList />} />
                    <Route path="/barbers" element={<BarberList />} />
                    <Route path="/appointments" element={<AppointmentList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
