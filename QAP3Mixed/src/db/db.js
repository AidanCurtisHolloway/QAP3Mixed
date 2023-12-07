const pgp = require('pg-promise')();

// Replace 'your_username', 'your_password', 'your_host', 'your_port', and 'your_database' with your actual database credentials
const connection = {
  user: 'postgres',
  password: 'Keyin2021',
  host: 'localhost',
  port: '5432',
  database: 'QAP3Mixed',
};

// Connection pool configuration
const poolConfig = {
  max: 20, // max number of clients in the pool
  min: 4, // min number of clients in the pool
  idleTimeoutMillis: 1000, // how long a client is allowed to remain idle before being closed
};

const db = pgp({ ...connection, ...poolConfig });

module.exports = db;
