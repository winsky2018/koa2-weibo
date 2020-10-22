/**
 * @description 对数据库中的User表进行操作
 * @author winSky
 */

const { User } = require('../db/model')
const doCrypto = require('../utils/cryp')

/**
 * 
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
    //查询条件
    const whereOpt = {
        userName
    }
    if(password) {
        Object.assign(whereOpt, { password: doCrypto(password) })
    }

    //执行查询
    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
        where: whereOpt,
    })
    if(!result) {
        return null
    }
    console.log('getUserInfo dataValues', result.dataValues)
    return result.dataValues
}

/**
 * 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别
 * @param {string} nickName 昵称
 */
async function createUser({userName, password, gender=3, nickName}) {
    const result = await User.create({
        userName, 
        password: doCrypto(password), 
        nickName: nickName || userName,
        gender
    })
    return result.dataValues
}

module.exports = {
    getUserInfo,
    createUser
}