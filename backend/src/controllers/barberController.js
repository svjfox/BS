const Barber = require('../models/Barber');

// Get all barbers
exports.getAllBarbers = async (req, res) => {
    try {
        const barbers = await Barber.find();
        res.json(barbers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new barber
exports.createBarber = async (req, res) => {
    const barber = new Barber(req.body);
    try {
        const newBarber = await barber.save();
        res.status(201).json(newBarber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};