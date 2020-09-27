/**
 * @description redis配置
 * @author winSky
 */

const {isProd} = require('../utils/env')

let REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379,
    password: '123456'
}

if(isProd) {
    //换成线上的redis配置
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379,
        password: '123456'
    }
}

module.exports = REDIS_CONF