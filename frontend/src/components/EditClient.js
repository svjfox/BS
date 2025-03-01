import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateClient } from '../api';

const EditClient = ({ client, onClientUpdated }) => {
    const [updatedClient, setUpdatedClient] = useState(client);

    useEffect(() => {
        setUpdatedClient(client);
    }, [client]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateClient(updatedClient).then(response => {
            if (response && response.data) {
                onClientUpdated(response.data);
            } else {
                console.error('Error updating client: No data in response');
            }
        }).catch(err => {
            console.error('Error updating client:', err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={updatedClient.name} onChange={(e) => setUpdatedClient({ ...updatedClient, name: e.target.value })} required />
            <input type="email" placeholder="Email" value={updatedClient.email} onChange={(e) => setUpdatedClient({ ...updatedClient, email: e.target.value })} required />
            <input type="password" placeholder="Password" value={updatedClient.pass} onChange={(e) => setUpdatedClient({ ...updatedClient, pass: e.target.value })} required />
            <input type="text" placeholder="Role" value={updatedClient.role} onChange={(e) => setUpdatedClient({ ...updatedClient, role: e.target.value })} required />
            <input type="text" placeholder="Phone Number" value={updatedClient.phoneNumber} onChange={(e) => setUpdatedClient({ ...updatedClient, phoneNumber: e.target.value })} required />
            <button type="submit">Update Client</button>
        </form>
    );
};

EditClient.propTypes = {
    client: PropTypes.object.isRequired,
    onClientUpdated: PropTypes.func.isRequired,
};

export default EditClient;
