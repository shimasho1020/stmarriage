const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
  const { username, katakana, age, salary, number, useremail, message } = JSON.parse(event.body).payload.data;

  async function sendEmail() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      // secure: true,
      auth: {
        user: 'stmarriage0108@gmail.com',
        pass: 'lkchntsufsrhohve',
      },
    });

    const mailContents = {
      from: 'stmarriage0108@gmail.com',
      to: 'shimasho19991020@gmail.com',
      subject: '【notes by SHARESL】お問い合わせありがとうございます',
      text: `${username} 様\n\nお問い合わせありがとうございます。\n以下の内容でフォームを送信いたしました。\n数日中に追って担当者よりメールにて回答をお送りいたします。\n今しばらくお待ちください。\n\n------ 送信内容 ------\n【お名前】\n${username}\n\n【フリガナ】\n${katakana}\n\n【メールアドレス】\n${useremail}\n\n【お問い合わせ内容】\n${message}\n\n--------------------\nnotes by SHARESL\n`,
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
};
