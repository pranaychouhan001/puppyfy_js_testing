const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Home Page',
  password: '0180',
  port: 5432,
});

async function fetchConsults(req, res) {
  try {
    const { rows } = await pool.query('SELECT * FROM doctors_full_view');
    const productsArray = rows; // Initialize an array to store the results
    res.json(productsArray); 
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = fetchConsults;
