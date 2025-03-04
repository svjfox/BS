const pool = require('../config/db');
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Client = sequelize.define('Client', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Client;
class Client {
    static async getAllClients() {
        try {
            const result = await pool.request().query('SELECT * FROM Clients');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async createClient(client) {
        try {
            const { email, name, pass, role, phoneNumber } = client;
            const result = await pool.request()
                .input('email', sql.NVarChar, email)
                .input('name', sql.NVarChar, name)
                .input('pass', sql.NVarChar, pass)
                .input('role', sql.NVarChar, role)
                .input('phoneNumber', sql.NVarChar, phoneNumber)
                .query('INSERT INTO Clients (Email, Name, Pass, Role, PhoneNumber) VALUES (@email, @name, @pass, @role, @phoneNumber)');
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Client;
