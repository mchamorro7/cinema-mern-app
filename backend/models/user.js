'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    user_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    user_password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    first_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    last_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
});

module.exports = mongoose.model('User', UserSchema);