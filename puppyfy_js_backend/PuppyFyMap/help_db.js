const { ConnectionPool } = require('mssql');

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
const pool = new ConnectionPool(config);

pool.on('error', err => {
  console.error('SQL Pool Error', err);
});

// Connect to the database
pool.connect()
  .then(() => {
    console.log('Connected to Azure SQL Database');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

async function fetchHelp(req, res) {
  try {

    
    // Query to select data from your view (adjust view name if needed)
    const result = await pool.query('SELECT * FROM [dbo].[help_details_view] ORDER BY created_at DESC;');

    // Send the fetched data as JSON response
    res.json(result.recordset);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = fetchHelp;
