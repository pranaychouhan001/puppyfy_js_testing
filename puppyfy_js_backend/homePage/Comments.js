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
    console.log('Connected to Azure SQL Database for comments');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

  async function fetchComments(req, res) {
    const { postId } = req.params;
    try {
      const request = pool.request();
      request.input('postId', sql.Int, postId); // Use parameterized query
      const result = await request.query(
        'SELECT * FROM comments_view WHERE post_id = @postId ORDER BY commented_at'
      );
      res.json(result.recordset);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

module.exports = fetchComments;
