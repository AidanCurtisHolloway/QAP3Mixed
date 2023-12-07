// src/db/db.js
const pgp = require('pg-promise')();

// Replace 'your_username', 'your_password', 'your_host', 'your_port', and 'your_database' with your actual database credentials
const connection = {
  user: 'your_username',
  password: 'your_password',
  host: 'your_host',
  port: 'your_port',
  database: 'your_database',
};

const db = pgp(connection);

module.exports = db;
