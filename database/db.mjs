import mysql from 'mysql2/promise';

// Create a pool using mysql2
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'seecs@123',
  database: 'lostandfound',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;


