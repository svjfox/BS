const { sql, poolPromise } = require('../config/db');

class Client {
    static async getAllClients() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM Clients');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async createClient(client) {
        try {
            const { email, name, pass, role, phoneNumber } = client;
            const pool = await poolPromise;
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

    static async updateClient(id, client) {
        try {
            const { email, name, pass, role, phoneNumber } = client;
            const pool = await poolPromise;
            const result = await pool.request()
                .input('id', sql.Int, id)
                .input('email', sql.NVarChar, email)
                .input('name', sql.NVarChar, name)
                .input('pass', sql.NVarChar, pass)
                .input('role', sql.NVarChar, role)
                .input('phoneNumber', sql.NVarChar, phoneNumber)
                .query('UPDATE Clients SET Email = @email, Name = @name, Pass = @pass, Role = @role, PhoneNumber = @phoneNumber WHERE ID = @id');
            return result;
        } catch (err) {
            throw err;
        }
    }

    static async deleteClient(id) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('id', sql.Int, id)
                .query('DELETE FROM Clients WHERE ID = @id');
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Client;
