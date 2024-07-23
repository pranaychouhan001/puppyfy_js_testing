const { ConnectionPool} = require('mssql');
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

const addPostComment = async (req, res) => {
  const { post_id, comment , author } = req.body;




  if (!comment || !comment.trim()) {
    return res.status(400).json({ error: 'Comment text cannot be empty' });
  }

  const parsedPostId = parseInt(post_id, 10);
  if (isNaN(parsedPostId)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }



  try {
    await pool.request()
    .input('postId', sql.Int, post_id) // Ensure correct data type
    .input('commentText', sql.NVarChar, comment)
    .input('author', sql.NVarChar, author)

      .query('INSERT INTO post_comments ([post_id], [author], [comment]) VALUES (@postId, @author, @commentText)');
      
    res.status(200).send('Comment added successfully');
    console.log("inserted successfully")
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addPostComment;
