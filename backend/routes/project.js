'use strict'

var express = require('express');

var UserController = require('../controllers/user');
var movieController = require('../controllers/movie');

var router = express.Router();

// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/', UserController.home);
router.get('/users', UserController.getUsers);
router.get('/users/:id?', UserController.getUser);
router.post('/users', UserController.saveUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.get('/movies', movieController.getMovies);
router.get('/movies/:id?', movieController.getMovie);
router.post('/movies', movieController.saveMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;