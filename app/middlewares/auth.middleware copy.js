require('dotenv').config();
const jwt = require('jsonwebtoken');

const veryfyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        console.log(decode);
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json({ status: false, message: 'Token is not valid', data: error })
    }
}

module.exports = {
    veryfyToken,
    veryfyRefreshToken
}