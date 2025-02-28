const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        trustedConnection: true, // Используется для Windows Authentication
        encrypt: true, // Для Azure
        trustServerCertificate: true // Для локального SQL Server
    }
};

const pool = new sql.ConnectionPool(config);

module.exports = pool;