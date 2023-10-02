'use strict'
const { createUser } = require('./handlers/userController')

module.exports = function (app) {
  app.get('/user', createUser)
}
