import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createClient } from '../api';

const AddClient = ({ onClientAdded }) => {
    const [newClient, setNewClient] = useState({ name: '', email: '', pass: '', role: '', phoneNumber: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        createClient(newClient).then(response => {
            if (response && response.data) {
                onClientAdded(response.data);
                setNewClient({ name: '', email: '', pass: '', role: '', phoneNumber: '' });
            } else {
                console.error('Error creating client: No data in response');
            }
        }).catch(err => {
            console.error('Error creating client:', err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={newClient.name} onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} required />
            <input type="email" placeholder="Email" value={newClient.email} onChange={(e) => setNewClient({ ...newClient, email: e.target.value })} required />
            <input type="password" placeholder="Password" value={newClient.pass} onChange={(e) => setNewClient({ ...newClient, pass: e.target.value })} required />
            <input type="text" placeholder="Role" value={newClient.role} onChange={(e) => setNewClient({ ...newClient, role: e.target.value })} required />
            <input type="text" placeholder="Phone Number" value={newClient.phoneNumber} onChange={(e) => setNewClient({ ...newClient, phoneNumber: e.target.value })} required />
            <button type="submit">Add Client</button>
        </form>
    );
};

AddClient.propTypes = {
    onClientAdded: PropTypes.func.isRequired,
};

export default AddClient;
