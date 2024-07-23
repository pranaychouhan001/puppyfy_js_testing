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

const insertFeedback = async (req, res) => {
  const { text, author } = req.body;

  // Validate input
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Feedback text cannot be empty' });
  }

  try {
    await pool.request()
      .input('text', text)
      .input('author', author)
      .query('INSERT INTO petfeedbacks (text, author) VALUES (@text, @author)');
      
    res.status(200).send('Feedback added successfully');
  } catch (err) {
    console.error('Error adding feedback:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = insertFeedback;
