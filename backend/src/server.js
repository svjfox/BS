﻿const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/barbers', require('./routes/barberRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));