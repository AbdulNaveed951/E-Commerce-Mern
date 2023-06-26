const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  let transporter = nodemailer.createTransport({
    // host: process.env.SMPT_HOST,
    // port: process.env.SMPT_PORT,
    // service: process.env.SMPT_SERVICE,

    service: "gmail",
  auth: {
  
    user: "merndev951@gmail.com",
    // pass: "abdulnaveed"
    // pass:"qvrvaaorlvwnpyzj"
    pass:"fjjsqiqsbwntecqx"

  }
  });

  let mailOptions = {
    from: 'merndev951@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
