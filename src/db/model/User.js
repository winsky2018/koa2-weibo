/**
 * @description 用户数据模型
 * @author winSky
 */

const { DataTypes } = require('sequelize')

const seq = require('../seq')

const User = seq.define('user', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码',
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '昵称',
    },
    gender: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别(1 男性, 2 女性, 3 保密)',
    },
    picture: {
        type: DataTypes.STRING,
        comment: '头像，图片地址',
        defaultValue: '/images/default_avatar.png'
    },
    city: {
        type: DataTypes.STRING,
        comment: '城市',
    },
})

module.exports = User