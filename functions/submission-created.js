const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback, $config) {
  const { password, sex, username, katakana, age, salary, number, useremail, message } = JSON.parse(event.body).payload.data;
  console.log(password)

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
      to: `${useremail}`,
      subject: '【セントマリアージュ青山】お問い合わせありがとうございます',
      text: `${username} 様\n\nお問い合わせありがとうございます。\n以下の内容でフォームを送信いたしました。\n数日中に追って連絡いたします。\n今しばらくお待ちください。\n\n------ 送信内容 ------\n【性別】\n${sex}\n\n【お名前】\n${username}\n\n【フリガナ】\n${katakana}\n\n【メールアドレス】\n${useremail}\n\n【電話番号】\n${number}\n\n【年齢】\n${age}\n\n【年収】\n${salary}\n\n【質問・その他】\n${message}\n\n
            password: ${process.env.SECRET_KEY} \n
            --------------------\n
            by セントマリアージュ青山\n`,
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
