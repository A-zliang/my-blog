const {sequelize,User} = require('../db/db.js');
const crypto = require('crypto');
const func = require('../public/func.js')
module.exports = {
    async login(ctx,next){
      console.log('----登录----');    
      let {username,password} = ctx.request.body;
      const hash = crypto.createHash('md5');
      hash.update(password);
      let newPasswd = hash.digest('hex');
      let user = await User.findOne({
        where:{
          username:username,
          password:newPasswd
        }
      })
      console.log(user);
      console.log(user.dataValues);
     if(user==null){
          ctx.body = {
            code: 400,
            msg:"账号或密码出错！",
          }
     }else{
       ctx.body = {
         code:200,
         msg:"登录成功",
         data:user.dataValues
       }
     }
    },
    async register(ctx,next){
        let {username, password1,password2,email} = ctx.request.body;
        let token = await func.create_token(username);
        if(password1!=password2){
          ctx.body = {
            code:401,
            msg: '两次密码不一致'
          }
        }
        // 加密
        const hash = crypto.createHash('md5');
        hash.update(password1);
        let newPasswd = hash.digest('hex');
        // 表未存在则创建
        let res = await sequelize.query("CREATE TABLE IF NOT EXISTS user (`id` INT UNSIGNED AUTO_INCREMENT,`username` VARCHAR(100) NOT NULL,`password` VARCHAR(100) NOT NULL,`email` VARCHAR(100) NOT NULL,`token` VARCHAR(500),`create_time` datetime  DEFAULT CURRENT_TIMESTAMP ,PRIMARY KEY (`id`))ENGINE=InnoDB DEFAULT CHARSET=utf8;");
        let user_exisit = await User.findOne({
          where:{
             username:username
          }
        })
        if(user_exisit!=null){
          ctx.body = {
            msg: "用户名已存在"
          }
          return;
        }

        let email_exisit = await User.findOne({
          where:{
            email:email
          }
        })
        if(email_exisit!=null){
          ctx.body = {
            msg: "邮箱已注册"
          }
          return;
        }
        let user = await User.create({
          username,
          password:newPasswd,
          email,
          token
        })
        console.log(user._options.isNewRecord);
       if(user._options.isNewRecord == true){
          ctx.body = {
            code:200,
            msg:"注册成功"
          }
       }
    },
    async  check_code(ctx,next){
      let email = ctx.request.body.email;
      let dbFlag = await db.tb_exist('admin');
      console.log(dbFlag.length);
      // 表存在,则需要验证邮箱是否已经被注册
      if(dbFlag.length!=0){
           let res = await db.findDb('admin','email',`'${email}'`);
           if(res.length != 0){
              ctx.body = {
                code: 401,
                msg:'邮箱已存在'
              }
              return;
           }
      }
      let code_num = '';
      for(var i=0;i<6;i++)
      {
        code_num+=Math.floor(Math.random()*10);
      }
      console.log(code_num);
      ctx.body={
          code:200,
          data:{
            code_num
          }
      }
      let sendText = {
        from: 'zl799@foxmail.com',
        subject: '验证码',
        to: email,
        text: `您的验证码是:'+ code_num+'.-----来自Zliang的博客`
    }
      await func.send_mail(sendText);
    }
}