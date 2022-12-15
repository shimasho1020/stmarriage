const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback, $config) {
  const { sex, username, katakana, age, salary, number, useremail, method, date, message } = JSON.parse(event.body).payload.data;

  async function sendEmail() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      // secure: true,
      auth: {
        user: process.env.EMAIL_KEY,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailContents = {
      from: 'セントマリアージュ青山',
      to: `${useremail}`,
      subject: '【セントマリアージュ青山】お問い合わせありがとうございます',
      text: `${username} 様\n\nお問い合わせありがとうございます。\n以下の内容でフォームを送信いたしました。\n数日中に追って連絡いたします。\n今しばらくお待ちください。\n\n------ 送信内容 ------\n【性別】\n${sex}\n\n【お名前】\n${username}\n\n【フリガナ】\n${katakana}\n\n【メールアドレス】\n${useremail}\n\n【電話番号】\n${number}\n\n【年齢】\n${age}\n\n【年収】\n${salary}\n\n【面談方法】\n${method}\n\n【面談希望日時】\n${date}\n\n【質問・その他】\n${message}\n\n--------------------\nby セントマリアージュ青山\n`,
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
