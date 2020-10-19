/**
 * @description 加密方法
 * @author winSky
 */

const crypto = require('crypto')
const { CRYPTO_SECRET_KEY } = require('../conf/secretKeys')

/**
 * md5加密
 * @param {string} content 明文
 */
function _md5(content) {
    const md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

function doCrypto(content) {
    const temp = `password=${content}&key=${CRYPTO_SECRET_KEY}`
    return _md5(temp)
}

module.exports = doCrypto
