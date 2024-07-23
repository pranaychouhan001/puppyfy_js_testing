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

const addFriend = async (req, res) => {
  const { username, friend_name , friend } = req.body;

  try {
    await pool.request()
      .input('username', username)
      .input('friend_name', friend_name)
      .input('friend', friend)
      .query('INSERT INTO friends (username, [friend_name] , friend) VALUES (@username, @friend_name , @friend)');

    res.status(200).send('Like added successfully');
  } catch (err) {
    console.error('Error adding like:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addFriend;
