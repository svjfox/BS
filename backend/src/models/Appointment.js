const pool = require('../config/db');
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Appointment = sequelize.define('Appointment', {
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    barberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    appointmentTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Appointment;
class Appointment {
    static async getAllAppointments() {
        try {
            const result = await pool.request().query('SELECT * FROM Appointments');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async createAppointment(appointment) {
        try {
            const { clientId, barberId, appointmentTime, status } = appointment;
            const result = await pool.request()
                .input('clientId', sql.NVarChar, clientId)
                .input('barberId', sql.NVarChar, barberId)
                .input('appointmentTime', sql.DateTime, appointmentTime)
                .input('status', sql.NVarChar, status)
                .query('INSERT INTO Appointments (ClientID, BarberID, AppointmentTime, Status) VALUES (@clientId, @barberId, @appointmentTime, @status)');
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Appointment;
