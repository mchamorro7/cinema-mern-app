'use strict'

var Movie = require('../models/movie');

var controller = {

    saveMovie: function (req, res) {
        var movie = new Movie();

        var params = req.body;
        movie.name = params.name;
        movie.description = params.description;
        movie.release_date = params.release_date;
        movie.minutes = params.minutes;

        movie.save((err, movieStored) => {
            if (err) return res.status(500).send({ message: 'Error when trying to save movie.' });

            if (!movieStored) return res.status(404).send({ message: `Can't save the new movie.` });

            return res.status(200).send({ project: movieStored });
        });
    },

    getMovie: function (req, res) {
        var movieId = req.params.id;

        if (movieId == null) return res.status(404).send({ message: `The movie doesn't exist.` });

        Movie.findById(movieId, (err, movie) => {

            if (err) return res.status(500).send({ message: `Error when trying to retrieve the movie.` });

            if (!movie) return res.status(404).send({ message: `The movie doesn't exist.` });

            return res.status(200).send({
                movie: movie
            });

        });
    },

    getMovies: function (req, res) {

        Movie.find({}).exec((err, movies) => {

            if (err) return res.status(500).send({ message: 'Error when trying to retrieve all the movies.' });

            if (!movies) return res.status(404).send({ message: 'No movies to show.' });

            return res.status(200).send({ movies: movies });
        });

    },

    updateMovie: function (req, res) {
        var movieId = req.params.id;
        var update = req.body;

        Movie.findByIdAndUpdate(movieId, update, { new: true }, (err, movieUpdated) => {
            if (err) return res.status(500).send({ message: 'Error when trying to update the given movie.' });

            if (!movieUpdated) return res.status(404).send({ message: `Given movie doen't exist.` });

            return res.status(200).send({
                movie: movieUpdated
            });
        });

    },

    deleteMovie: function (req, res) {
        var movieId = req.params.id;

        Movie.findByIdAndRemove(movieId, (err, movieRemoved) => {
            if (err) return res.status(500).send({ message: 'Error when trying to remove the given movie.' });

            if (!movieRemoved) return res.status(404).send({ message: "Can't remove the given movie." });

            return res.status(200).send({
                user: movieRemoved
            });
        });
    },

};

module.exports = controller;