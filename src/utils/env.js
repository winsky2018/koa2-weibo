/**
 * @description 动态获取NODE_ENV，并暴露出去
 */

const ENV = process.env.NODE_ENV

module.exports = {
    isProd: ENV === 'production',
    isDev: ENV === 'dev',
    isTest: ENV === 'test',
}