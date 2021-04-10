const router = require('koa-router')()
const user = require('../controller/user.js')
const article = require('../controller/article.js')

router.post('/login',user.login)
router.post('/register',user.register)
router.post('/checkcode',user.check_code)
router.post('/publishedArticle',article.published_article)
router.get('/getContent',article.getContent)

module.exports = router
