import React from 'react';
import PropTypes from 'prop-types';
import { deleteClient } from '../api';

const DeleteClient = ({ clientId, onClientDeleted }) => {
    const handleDelete = () => {
        deleteClient(clientId).then(response => {
            if (response && response.data) {
                onClientDeleted(clientId);
            } else {
                console.error('Error deleting client: No data in response');
            }
        }).catch(err => {
            console.error('Error deleting client:', err);
        });
    };

    return (
        <button onClick={handleDelete}>Delete Client</button>
    );
};

DeleteClient.propTypes = {
    clientId: PropTypes.number.isRequired,
    onClientDeleted: PropTypes.func.isRequired,
};

export default DeleteClient;
