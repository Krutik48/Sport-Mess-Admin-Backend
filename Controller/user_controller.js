const User = require('../Model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports.login = async function (req, res) {
    try {
        let user = await User.findOne({ 
            email: req.body.email 
        });
        if (!user) {
            return res.status(401).json({
                message: 'Authentication failed. User not found.'
            });
        }
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result) {
                const payload = user.toJSON();
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d'});
                return res.status(200).json({
                    message: 'Authentication successful.',
                    token: token,
                    user: user
                });
            }
            return res.status(401).json({
                message: 'Authentication failed. Wrong password.'
            });
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error.",
            error: err,
        });
    }
}

module.exports.register = async function (req, res) {
    try {
        let user = await User.findOne({
            email: req.body.email
        });
        if (user) {
            return res.status(409).json({
                message: 'Mail exists'
            });
        }
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            }
            else {
                const user = new User({
                    email: req.body.email,
                    password: hash
                });
                await user.save();
                res.status(201).json({
                    message: 'User created'
                });
            }
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error.",
            error: err,
        });
    }
}

module.exports.verify = async function (req, res) {
    res.status(200).json({
        message: "User verified"
    });
}