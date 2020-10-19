/**
 * @description 对数据库中的User表进行操作
 * @author winSky
 */

const { User } = require('../db/model')

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
        Object.assign(whereOpt, { password })
    }

    //执行查询
    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
        where: whereOpt,
    })
    if(!result) {
        return null
    }
    return result.dataValues
}

module.exports = {
    getUserInfo
}