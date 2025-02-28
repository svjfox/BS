const express = require('express');
const { getAllAppointments, createAppointment } = require('../Controllers/AppointmentController');

const router = express.Router();

router.get('/', getAllAppointments);
router.post('/', createAppointment);

module.exports = router;