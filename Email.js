var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Fatoulombodji@gmail.com',
      pass: 'flwr tfoq nalk yozs'

    }
  });
  var mailOptions = {
    from: 'Fatoulombodji@gmail.com',
    to: 'josephhenrinodichao@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });