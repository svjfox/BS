﻿const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({ message: err.message });
    }
};

exports.createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        res.status(201).json(newClient);
    } catch (err) {
        console.error('Error creating client:', err);
        res.status(400).json({ message: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.update(req.body, { where: { id: req.params.id } });
        res.json(updatedClient);
    } catch (err) {
        console.error('Error updating client:', err);
        res.status(400).json({ message: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        await Client.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Client deleted' });
    } catch (err) {
        console.error('Error deleting client:', err);
        res.status(400).json({ message: err.message });
    }
};
