'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    genre: {
        type: String,
        required: true,
        min: 2,
        max: 60
    },
    release_date: {
        type: Date,
        default: Date.now
    },
    minutes: {
        type: Number,
        required: true,
        min: 30,
        max: 400
    },
});

module.exports = mongoose.model('Movie', MovieSchema);