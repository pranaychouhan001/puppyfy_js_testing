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
    console.log('Connected to insert feed like');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

const insertFeed = async (req, res) => {
  const { post_id, author } = req.body;

  try {
    await pool.request()
      .input('post_id', post_id)
      .input('author', author)
      .query('INSERT INTO feed_likes (post_id, [user]) VALUES (@post_id, @author)');
      
    res.status(200).send('Feed like recorded successfully');
  } catch (err) {
    console.error('Error adding feed like:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = insertFeed;
