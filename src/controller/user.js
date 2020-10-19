/**
 * @description user controller
 * @author winSky
 */


const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { getUserInfo } = require('../services/user')
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
        return new ErrorModel(ErrorInfo['10003'])
    }
}

module.exports = {
    isExist
}