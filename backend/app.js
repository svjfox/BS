const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sql = require('mssql');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Логирование запросов
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Маршруты
app.use('/api/clients', require('./Routes/clientRoutes'));
app.use('/api/barbers', require('./Routes/barberRoutes'));
app.use('/api/appointments', require('./Routes/appointmentRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));