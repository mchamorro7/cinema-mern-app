'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    user_name: String,
    user_password: String,
    first_name: String,
    last_name: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);