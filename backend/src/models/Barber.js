const pool = require('../config/db');
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Barber = sequelize.define('Barber', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profileDetails: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Barber;
class Barber {
    static async getAllBarbers() {
        try {
            const result = await pool.request().query('SELECT * FROM Barbers');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async createBarber(barber) {
        try {
            const { userId, name, profileDetails } = barber;
            const result = await pool.request()
                .input('userId', sql.NVarChar, userId)
                .input('name', sql.NVarChar, name)
                .input('profileDetails', sql.NVarChar, profileDetails)
                .query('INSERT INTO Barbers (UserID, Name, ProfileDetails) VALUES (@userId, @name, @profileDetails)');
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Barber;
