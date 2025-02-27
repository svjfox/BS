const express = require('express');
const barberController = require('../controllers/barberController');

const router = express.Router();

router.get('/', barberController.getAllBarbers);
router.post('/', barberController.createBarber);

module.exports = router;