var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "localhost",
  port: 8125,
  tls: {
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: '"Example Team" <from@example.com>',
  to: 'to@example.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />'
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
