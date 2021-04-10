const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// 用于创建token
const secret = 'ZLiang_blog'
//创建一个smtp服务器
const config = {
    host: 'smtp.qq.com',
    port: 465,
    auth:{
        user: '1365582147@qq.com',
        pass: 'minoevfzffcsjcdg'
    }
}
// 创建一个SMTP客户端对象
const transporter = nodemailer.createTransport(config);

module.exports={
    // 创建token
    create_token(data){
        return  jwt.sign({data},secret,{expiresIn: '1h'})
    },
    // 发送验证码
    send_mail(email){
        transporter.sendMail(email, function(error, info){
            if(error) {
                return console.log(error);
            }
            console.log('mail sent:', info.response);
        });
    }
}