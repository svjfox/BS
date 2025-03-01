const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.getAllClients();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createClient = async (req, res) => {
    try {
        const newClient = await Client.createClient(req.body);
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.updateClient(req.params.id, req.body);
        res.json(updatedClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        await Client.deleteClient(req.params.id);
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


