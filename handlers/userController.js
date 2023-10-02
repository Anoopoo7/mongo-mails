'use strict'
const userservice = require('../services/userServices')

const createUser = (req, res) => {
    return userservice.createUser(req, res);
}

module.exports = { createUser }