const mysql = require('mysql2/promise');

const pool = module.exports = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'nodeuser1',
});

pool.on('acquire', connection => {
    debug(`connection ${connection.threadId} acquired`);
});

pool.on('connection', connection => {
    debug(`connection ${connection.threadId} connected`);
});

pool.on('enqueue', connection => {
    debug(`connection ${connection.threadId} enqueue`);
});

pool.on('release', connection => {
    debug(`connection ${connection.threadId} released`);
});