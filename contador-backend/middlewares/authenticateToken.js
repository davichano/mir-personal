const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log("-------------- auth:", authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    if (!token) {
        return res.status(401).json({message: 'No token provided'});
    }

    if (!secret) {
        throw new Error("JWT_SECRET is not configured in the .env file");
    }

    try {
        req.user = jwt.verify(token, secret);
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({error: "Invalid token"});
    }
}

module.exports = authenticateToken;