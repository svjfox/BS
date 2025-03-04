const sql = require('mssql');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const config = {
    user: process.env.DB_USERNAME,
    const { Sequelize } = require('sequelize');
    const dotenv = require('dotenv');

    // Load environment variables
    dotenv.config();

    const sequelize = new Sequelize(process.env.DB_DATANAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        logging: false,
    });

    const connectDB = async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            if (process.env.SYNC === 'true') {
                await sequelize.sync({ alter: true });
                console.log('All models were synchronized successfully.');
            }
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    };

    module.exports = { sequelize, connectDB };
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOSTNAME,
    database: process.env.DB_DATANAME,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch((err) => {
        console.error('Database connection failed!', err);
        process.exit(1);
    });

const connectDB = async () => {
    try {
        await poolPromise;
    } catch (err) {
        console.error('Database connection failed!', err);
        process.exit(1);
    }
};

module.exports = { sql, poolPromise, connectDB };
