const jwt = require('jsonwebtoken');

module.exports = function (req, res) {
    const token = req.body.data;
    console.log({ token: token });
    if (!token) return res.status(401).send('Access denied. You must log in.');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified; // This should show the user._id
        res.status(200).send(req.user);
    } catch (error) {
        res.status(400).send('Invalid Token.');
    }
}