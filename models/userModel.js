const mongoose = require('mongoose');
const validator =  require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
        minLength: 1,
        maxLength: 20,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email!']
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 8
    },
    passwordConfirm: {
        type: String,
        require: [true, 'Please provide a password'],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    }
});

userSchema.pre('save', async function(next) {
    // only run this code if password was actually modified, since we can use save for changing
    // fields like email / username / name
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
})

const User =  mongoose.model('User', userSchema);

module.exports = User;