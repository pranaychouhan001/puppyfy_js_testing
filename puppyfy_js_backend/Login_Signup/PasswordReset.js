const bcrypt = require('bcrypt');
const { ConnectionPool } = require('mssql');
const { Router } = require('express');

// Azure SQL Database configuration
const config = {
  user: 'puppyfy_administrator',
  password: 'Pranay@0180',
  server: 'puppyfyserver.database.windows.net',
  database: 'puppyfy',
  options: {
    encrypt: true,
    enableArithAbort: true,
  }
};

// Create a connection pool
const pool = new ConnectionPool(config);

pool.connect()
  .then(() => {
    console.log('updating password');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });


// Update password
async function updatePassword(req, res) {
  const { email, tempPassword, newPassword } = req.body;
  try {
    const result = await pool.request()
      .input('Email', email)
      .query(`SELECT temp_password FROM temp_passwords WHERE email = @Email AND expires_at > GETDATE()`);

    if (result.recordset.length > 0) {
      const isMatch = await bcrypt.compare(tempPassword, result.recordset[0].temp_password);
      if (isMatch) {
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        await pool.request()
          .input('Email', email)
          .input('HashedNewPassword', hashedNewPassword)
          .query(`UPDATE login_credentials SET password = @HashedNewPassword WHERE email = @Email`);
        res.status(200).json({ success: true, message: 'Password updated successfully' });
      } else {
        res.status(400).json({ success: false, message: 'Invalid temporary password' });
      }
    } else {
      res.status(400).json({ success: false, message: 'Temporary password expired or invalid' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports =  updatePassword ;
