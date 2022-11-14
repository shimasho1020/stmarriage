require('dotenv').config();

const nodemailer = require('nodemailer');

console.log('success')

exports.handler = function(event, context, callback) {
  const { username, katakana, age, salary, number, useremail, message } = JSON.parse(event.body).payload.data;
  
  // OAuth認証情報
  const auth = {
    type         : 'OAuth2',
    user         : 'shimasho1020@gmail.com',
    clientId     : '1079165802195-1fib7jtg9tace4jheb1jgjvi32j6p3m8.apps.googleusercontent.com',
    clientSecret : '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',
    refreshToken : '1//04OyjDuX3zyLfCgYIARAAGAQSNwF-L9IrMkCWdxuZpzp1Yz1Dh8Jq7nw1eofpD_NV4Xl3IQtUgbUI8uDqBjef4_VgvCbO6BcT3bg'
  };


  // トランスポート
  const transport = {
    service : 'gmail',
    auth    : auth
  };

  let transporter = nodemailer.createTransport(transport);

  const url = 'https://notes-sharesl.netlify.app/';

  let mailOptions = {
    from    : `notes by SHARESL <info@sharesl.net>`,
    to      : `${useremail}`,
    subject : '【notes by SHARESL】お問い合わせありがとうございます',
    text    : `${username} 様\n\nお問い合わせありがとうございます。\n以下の内容でフォームを送信いたしました。\n数日中に追って担当者よりメールにて回答をお送りいたします。\n今しばらくお待ちください。\n\n------ 送信内容 ------\n【お名前】\n${username}\n\n【フリガナ】\n${katakana}\n\n【メールアドレス】\n${useremail}\n\n【お問い合わせ内容】\n${message}\n\n--------------------\nnotes by SHARESL\n${url}\n`,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: 'ok',
      });
    }
  });
};
