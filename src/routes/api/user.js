/**
 * @description user API 路由
 * @author winSky
 */

const router = require('koa-router')()
router.prefix('/api/user')

const { isExist } = require('../../controller/user')
const user = require('../../services/user')

//用户注册
router.post('/register', async (ctx, next) => {

})
//用户是否存在
router.post('/isExist', async (ctx, next) => {
    
    const { userName } = ctx.request.body
    console.log(userName)
    ctx.body = await isExist(userName)
})

module.exports = router