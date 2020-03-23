'use strict'

var express = require('express');

var UserController = require('../controllers/user');
var movieController = require('../controllers/movie');

var router = express.Router();

const verify = require('./verifyToken');

// This middlewares are for upload things

// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/', UserController.home);
router.get('/users', verify, UserController.getUsers);
router.post('/users/login', UserController.loginUser);
router.get('/users/:id?', verify, UserController.getUser);
router.post('/users', UserController.saveUser);
router.put('/users/:id', verify, UserController.updateUser);
router.delete('/users/:id', verify, UserController.deleteUser);
router.get('/movies', verify, movieController.getMovies);
router.get('/movies/:id?', verify, movieController.getMovie);
router.post('/movies', verify, movieController.saveMovie);
router.put('/movies/:id', verify, movieController.updateMovie);
router.delete('/movies/:id', verify, movieController.deleteMovie);

module.exports = router;