const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    throw new Error('haha')
    ctx.body = {
        title: 'koa2 json',
    }
})

router.get('/profile/:userName', async (ctx, next) => {
    const {userName} = ctx.params
    ctx.body = {
        userName
    }
})
router.get('/loadMore/:userName/:pageNo', async (ctx, next) => {
    const {userName, pageNo} = ctx.params
    ctx.body = {
        userName, pageNo
    }
})

module.exports = router
