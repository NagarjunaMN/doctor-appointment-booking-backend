const jwt = require('jsonwebtoken')

const createAccessToken = (id) => {
    return jwt.sign(id, process.env.API_ACCESS_SECRET,{ expiresIn : '1d'}) //expires in 1 day
}

module.exports = createAccessToken