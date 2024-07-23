const sql = require('mssql');

// Configure your Azure SQL Database connection settings
const config = {
  user: 'puppyfy_administrator',
  password: 'Pranay@0180',
  server: 'puppyfyserver.database.windows.net',
  database: 'puppyfy',
  options: {
    encrypt: true, // Use encryption
    enableArithAbort: true, // Enable ArithAbort
    trustServerCertificate: true // Add this if necessary
  }
};

// Create a connection pool
const pool = new sql.ConnectionPool(config);

pool.on('error', err => {
  console.error('SQL Pool Error', err);
});

// Connect to the database
pool.connect()
  .then(() => {
    console.log('Connected to Azure SQL Database for story');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

async function fetchStories(req, res) {
  try {
    const request = pool.request(); // Create a new request
    const result = await request.query(`select * from story_view order by story_id desc`);
    const storiesArray = result.recordset; // Get the result as an array
    res.json(storiesArray);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = fetchStories;
