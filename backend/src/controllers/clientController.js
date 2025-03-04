const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.getAllClients();
        console.log('Fetched clients:', clients); // Логирование данных
        res.json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err); // Логирование ошибки
        res.status(500).json({ message: err.message });
    }
};

exports.createClient = async (req, res) => {
    try {
        const newClient = await Client.createClient(req.body);
        console.log('Created client:', newClient); // Логирование данных
        res.status(201).json(newClient);
    } catch (err) {
        console.error('Error creating client:', err); // Логирование ошибки
        res.status(400).json({ message: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.updateClient(req.params.id, req.body);
        console.log('Updated client:', updatedClient); // Логирование данных
        res.json(updatedClient);
    } catch (err) {
        console.error('Error updating client:', err); // Логирование ошибки
        res.status(400).json({ message: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        await Client.deleteClient(req.params.id);
        console.log('Deleted client with ID:', req.params.id); // Логирование данных
        res.json({ message: 'Client deleted' });
    } catch (err) {
        console.error('Error deleting client:', err); // Логирование ошибки
        res.status(400).json({ message: err.message });
    }
};
