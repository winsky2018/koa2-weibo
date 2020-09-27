/**
 * @description json test
 * @author winSky
 */

const server = require('./server')

test('/json 接口数据返回成功！', async () => {
    const res = await server.get('/json')
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
})