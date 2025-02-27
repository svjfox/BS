const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    role: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

module.exports = mongoose.model('Client', ClientSchema);