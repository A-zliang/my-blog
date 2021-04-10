const {sequelize,Article} = require('../db/db.js');

module.exports = {
    async published_article(ctx){
        let {title,content} = ctx.request.body
        if(title==''||content==''){
            ctx.body ={
                code:400,
                msg:'发布失败'
            }
        }
        let res = await sequelize.query("CREATE TABLE IF NOT EXISTS article(`id` INT UNSIGNED AUTO_INCREMENT,`title` VARCHAR(100) NOT NULL,`content` text NOT NULL,PRIMARY KEY (`id`))");
        let save_article = await Article.create({
            title,
            content
        })
        console.log(save_article);
            ctx.body ={
                code:200,
                msg:'发布成功'
            }

    },
    async getContent(ctx){
        let data = await Article.findOne({
            where:{
                id:8
            }
        })
        console.log(data);
        ctx.body = {
            code:200,
            data:data
        }
    }
}