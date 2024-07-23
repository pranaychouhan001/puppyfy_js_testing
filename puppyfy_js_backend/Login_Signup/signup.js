const bcrypt = require('bcrypt');
const { Router } = require('express');
const sql = require('mssql');

// Configure your Azure SQL Database connection settings
const config = {
  user: 'puppyfy_administrator',
  password: 'Pranay@0180',
  server: 'puppyfyserver.database.windows.net',
  database: 'puppyfy',
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  }
};

const pool = new sql.ConnectionPool(config);

pool.connect()
  .then(() => {
    console.log('Connected');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

async function insertUser(req, res) {
  const { phoneNumber, fullName, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const request = pool.request();
    request.input('phoneNumber', sql.NVarChar, phoneNumber);
    request.input('fullName', sql.NVarChar, fullName);
    request.input('username', sql.NVarChar, username);
    request.input('password', sql.NVarChar, hashedPassword);

    const query = `
      INSERT INTO login_credentials (email, fullname, username, password)
      VALUES (@phoneNumber, @fullName, @username, @password)
    `;

    await request.query(query);

    res.status(200).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = insertUser;
