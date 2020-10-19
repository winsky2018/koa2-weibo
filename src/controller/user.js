/**
 * @description user controller
 * @author winSky
 */


const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { getUserInfo, createUser } = require('../services/user')
const ErrorInfo = require('../model/ErrorInfo')


/**
 * 
 * 查询数据库判断用户名是否存在
 * @param {String} userName 用户名
 */
async function isExist(userName) {
    const userInfo = await getUserInfo(userName)

    if(userInfo) {
        //用户存在
        return new SuccessModel(userInfo)
    }else {
        //用户不存在
        return new ErrorModel(ErrorInfo['registerUserNameNotExistInfo'])
    }
}

/**
 * 
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别(1 男， 2 女， 3 保密)
 */
async function register({ userName, password, gender }) {
    const userInfo = await getUserInfo(userName)
    if(userInfo) {
        //用户存在
        return new ErrorModel(ErrorInfo['registerUserNameExistInfo'])
    }

    //注册Service
    try {
        await createUser({
            userName, 
            password, 
            gender,
        })
        return new SuccessModel()
    }catch (e) {
        return new ErrorModel(ErrorInfo['registerFailInfo'])
    }
    
}
module.exports = {
    isExist,
    register    
}