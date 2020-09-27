/**
 * @description mysql配置
 * @author winSky
 */

const {isProd, isTest} = require('../utils/env')

//配置参数参照：https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
let MYSQL_CONF = {
    host: '127.0.0.1',
    port: 3306,
    password: '123456',
    username: 'root',
    database: 'koa2-weibo',
    dialect: 'mysql',
}

if(isProd) {  
    //换成线上的mysql配置
    MYSQL_CONF = {
        pool: {
            max: 5,         //连接池中最大的连接数量
            min: 0,         //最小连接数量
            idle: 10000     //如果一个连接池10s之内没有被使用，则释放
        },
        ...MYSQL_CONF
    }
}

if(isTest) {
    //测试环境关闭logger
    MYSQL_CONF = {
        logging: () => {},
        ...MYSQL_CONF
    }
}

module.exports = MYSQL_CONF