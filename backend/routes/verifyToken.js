const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access denied. You must log in.');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified; // This should show the user._id
        next(); // Go to the next middleware
    } catch (error) {
        res.status(400).send('Invalid Token.');
    }
}