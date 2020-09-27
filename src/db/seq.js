/**
 * @description 使用sequelize连接mysql，并返回sequelize实例
 * @author winSky
 */

const { Sequelize } = require('sequelize')
const mysqlConf = require('../conf/mysql.conf');

const sequelize = new Sequelize(mysqlConf)


module.exports = sequelize