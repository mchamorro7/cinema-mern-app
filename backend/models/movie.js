'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = Schema({
    name: String,
    description: String,
    release_date: String,
    minutes: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);