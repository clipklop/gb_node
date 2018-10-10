// Mailer


const nodeMailer = require('nodemailer');
// node-imap


const smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'user@gmail.com',
    pass: '****', // trailing comma
  }
});

const mail = {
  from: 'Vasya Pupa <vaslgit ssya@pupa.com',
  to: 'petya@pupa <petya@pupa.com',
  subject: 'Family holiday!',
  text: 'Hello guys',
  html: '<b>Hello</b> guys! <p> Whaaattssss uppp??! </p>'
};

smtpTransport.sendMail(mail, (err, response) => {
  err ? console.error(err) : console.log('Message has been sent.');
});