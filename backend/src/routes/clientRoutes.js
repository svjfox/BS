const express = require('express');
const { getAllClients, createClient } = require('../Controllers/ClientController');

const router = express.Router();

router.get('/', getAllClients);
router.post('/', createClient);

module.exports = router;