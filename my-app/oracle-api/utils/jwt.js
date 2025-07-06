const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(
        {CUSTOMER_ID: user.CUSTOMER_ID, EMAIL: user.EMAIL},
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );
}

function verifyToken(token)
{
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {generateToken, verifyToken};