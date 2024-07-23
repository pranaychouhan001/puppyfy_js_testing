const { Router } = require('express');
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
    console.log('hello');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

const addStory = async (req, res) => {
  const { imageUrl, author } = req.body;

  try {
    await pool.request()
      .input('imageurl', imageUrl)
      .input('author', author)
      .query('INSERT INTO user_story (image_url, author) VALUES (@imageurl, @author)');

    res.status(200).send('Story added successfully');
  } catch (err) {
    console.error('Error adding story:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addStory;
