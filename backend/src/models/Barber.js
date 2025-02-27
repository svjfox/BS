const mongoose = require('mongoose');

const BarberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profileDetails: { type: String, required: true },
    userId: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Barber', BarberSchema);