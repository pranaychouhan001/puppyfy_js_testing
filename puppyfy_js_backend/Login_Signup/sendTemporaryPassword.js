const bcrypt = require('bcrypt');
const { ConnectionPool } = require('mssql');
const { Router } = require('express');
const nodemailer = require('nodemailer');




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
    console.log('Connected to Azure SQL Database');
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pranay2626@gmail.com',
    pass: 'mrcf abhk bfnc zdjd',
  }
});


// Send temporary password
async function sendTempPassword(req, res) {
  const { email } = req.body;
  const tempPassword = Math.random().toString(36).slice(-8);
  const hashedTempPassword = await bcrypt.hash(tempPassword, 10);

  const query = `
    INSERT INTO temp_passwords (email, temp_password, expires_at)
    VALUES (@Email, @HashedTempPassword, DATEADD(MINUTE, 2, GETDATE()))
  `;
  await pool.request()
    .input('Email', email)
    .input('HashedTempPassword', hashedTempPassword)
    .query(query);

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Temporary Password',
    text: `Hello

    We've received your request for a single-use code to use with your Microsoft account.

Your temporary password is: ${tempPassword}

If you didn't request this code, you can safely ignore this email. Someone else might have typed your email address by mistake.

Thanks,
The PuppyFy team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
      res.status(500).json({ success: false, message: 'Email sending failed' });
    } else {
      res.status(200).json({ success: true, message: 'Temporary password sent to email' });
    }
  });
}

module.exports = sendTempPassword;
