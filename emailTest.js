const nodemailer = require('nodemailer');

  async function sendEmail() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      // secure: true,
      auth: {
        user: 'stmarriage0108@gmail.com',
        pass: 'lkchntsufsrhohve',
      },
      // OAuth認証情報
      // const auth = {
      //   type         : 'OAuth2',
      //   user         : 'shimasho1020@gmail.com',
      //   clientId     : '1079165802195-1fib7jtg9tace4jheb1jgjvi32j6p3m8.apps.googleusercontent.com',
      //   clientSecret : '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',
      //   refreshToken : '1//04OyjDuX3zyLfCgYIARAAGAQSNwF-L9IrMkCWdxuZpzp1Yz1Dh8Jq7nw1eofpD_NV4Xl3IQtUgbUI8uDqBjef4_VgvCbO6BcT3bg'
      // };
    });

    const mailContents = {
      from: 'stmarriage0108@gmail.com',
      to: 'shimasho19991020@gmail.com',
      subject: 'Test Mail',
      text: 'Hello from nodemailer!',
    };

    await transporter.sendMail(mailContents, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  sendEmail().catch(console.error);