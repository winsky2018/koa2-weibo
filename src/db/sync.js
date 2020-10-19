/**
 * @description mysql数据库同步
 * @author winSky
 */

const sequelize = require('./seq')
//引入所有的模型
require('./model')

//测试连接
!(async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
    
})()

//执行同步
sequelize.sync({force: true}).then(() => {
    console.log('sync ok')
    // process.exit()
})