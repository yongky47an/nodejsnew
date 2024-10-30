const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'admin123',
  host: '192.168.247.137',
  port: 5432, // default Postgres port
  database: 'db_nodejs'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};