const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    clientId: { type: String, required: true },
    barberId: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);