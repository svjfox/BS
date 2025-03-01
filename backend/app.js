const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./src/config/db'); // Импортируем connectDB

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Вызываем connectDB

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', require('./src/routes/clientRoutes'));
app.use('/api/barbers', require('./src/routes/barberRoutes'));
app.use('/api/appointments', require('./src/routes/appointmentRoutes'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
