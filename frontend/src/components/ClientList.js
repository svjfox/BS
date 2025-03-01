import React, { useEffect, useState } from 'react';
import { getClients } from '../api';
import AddClient from './AddClient';
import EditClient from './EditClient';
import DeleteClient from './DeleteClient';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        getClients().then(response => {
            if (response && response.data) {
                setClients(response.data);
            } else {
                console.error('Error fetching clients: No data in response');
            }
        }).catch(err => console.error('Error fetching clients:', err));
    }, []);

    const handleClientAdded = (client) => {
        setClients([...clients, client]);
    };

    const handleClientUpdated = (updatedClient) => {
        setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
        setSelectedClient(null);
    };

    const handleClientDeleted = (clientId) => {
        setClients(clients.filter(client => client.id !== clientId));
    };

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        {client.name} - {client.email}
                        <button onClick={() => setSelectedClient(client)}>Edit</button>
                        <DeleteClient clientId={client.id} onClientDeleted={handleClientDeleted} />
                    </li>
                ))}
            </ul>
            <AddClient onClientAdded={handleClientAdded} />
            {selectedClient && <EditClient client={selectedClient} onClientUpdated={handleClientUpdated} />}
        </div>
    );
};

export default ClientList;
