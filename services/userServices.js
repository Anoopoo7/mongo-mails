const createUser = (req, res) => {
    return res.json({
        hello: 'create user!'
    })
}

module.exports = { createUser }