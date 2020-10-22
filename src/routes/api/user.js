/**
 * @description user API 路由
 * @author winSky
 */

const router = require('koa-router')()
router.prefix('/api/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
const { isExist, register, login } = require('../../controller/user')
const user = require('../../services/user')

//用户注册
router.post('/register', genValidator(userValidate), async (ctx, next) => {
    const { userName, password, gender } = ctx.request.body
    //调用controller ,返回
    ctx.body = await register({ userName, password, gender })
})
//用户是否存在
router.post('/isExist', async (ctx, next) => {
    
    const { userName } = ctx.request.body
    console.log(userName)
    ctx.body = await isExist(userName)
})

//用户登录
router.post('/login', async (ctx, next) => {
    const { userName, password } = ctx.request.body 
    //调用controller层进行返回
    ctx.body = await login({ctx, userName, password})
})

module.exports = router