const sql = require('mssql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Configure your Azure SQL Database connection settings
const config = {
  user: 'puppyfy_administrator',
  password: 'Pranay@0180',
  server: 'puppyfyserver.database.windows.net',
  database: 'puppyfy',
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true, // Adjust based on your requirements
  }
};

// Create a connection pool
const pool = new sql.ConnectionPool(config);

// Connect to the database
pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

const secretKey = 'janznaznaxysfytfshxsnxkxmksnxjbcudyudgheics'; // Replace with a strong secret key

async function loginUser(req, res) {
  const { username, password } = req.body;
  try {
    // Fetch the user from the database
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM login_credentials WHERE username = @username');

    if (result.recordset.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const user = result.recordset[0];

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '30m' }); // '30s' changed to '30m' for practicality

    // Respond with the token
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = loginUser;
