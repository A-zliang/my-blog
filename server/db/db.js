const Sequelize = require('sequelize');

let sequelize  = new Sequelize('blog', 'root', '123456', {
    host: 'localhost', // 数据库地址
    dialect: 'mysql', // 指定连接的数据库类型
    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
});



const User = sequelize.define('user',{
    username:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    token:{
        type: Sequelize.STRING 
    },
},{
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true,
    timestamps: false    //不设置Sequelize 会自动生成createdAt updatedAt。sql会报错
});

const Article = sequelize.define('article',{
    title:{
        type: Sequelize.STRING
    },
    content:{
        type: Sequelize.TEXT
    }
},{
    freezeTableName: true,
    timestamps: false  
})

module.exports = {
    sequelize,
    User,
    Article
}
