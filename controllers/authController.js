const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        });

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        res.status(201).json({
            status: 'success',
            token,
            data: {
                newUser,
            }
        })
    } catch (error) {
        console.log(error);
        next();
    }
}