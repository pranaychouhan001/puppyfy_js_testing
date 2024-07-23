// homePage/petfeedbacks_likes.js
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

const likeFeedback = async (req, res) => {
  const { feedback_id, user_id } = req.body;

  try {
    await pool.request()
      .input('feedback_id', feedback_id)
      .input('user_id', user_id)
      .query('INSERT INTO feedback_likes (feedback_id, [user]) VALUES (@feedback_id, @user_id)');

    res.status(200).send('Like added successfully');
  } catch (err) {
    console.error('Error adding like:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = likeFeedback;
