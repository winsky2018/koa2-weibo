/**
 * @description jest server
 * @author winSky
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)

