const express = require('express');
const { getAllBarbers, createBarber } = require('../Controllers/BarberController');

const router = express.Router();

router.get('/', getAllBarbers);
router.post('/', createBarber);

module.exports = router;