'use strict'

var User = require('../models/user');

var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: 'Home visited'
        });
    },


    saveUser: function (req, res) {
        var user = new User();

        var params = req.body;
        user.user_name = params.user_name;
        user.user_password = params.user_password;
        user.first_name = params.first_name;
        user.last_name = params.last_name;
        user.email = params.email;

        user.save((err, userStored) => {

            if (err) return res.status(500).send({ message: 'Error when trying to save user.' });

            if (!userStored) return res.status(404).send({ message: `Can't save the new user.` });

            return res.status(200).send({ project: userStored });
        });
    },

    getUser: function (req, res) {
        var userId = req.params.id;

        if (userId == null) return res.status(404).send({ message: `The user doesn't exist.` });

        User.findById(userId, (err, user) => {

            if (err) return res.status(500).send({ message: `Error when trying to retrieve the user.` });

            if (!user) return res.status(404).send({ message: `The user doesn't exist.` });

            return res.status(200).send({
                user: user
            });

        });
    },

    getUsers: function (req, res) {

        User.find({}).exec((err, users) => {

            if (err) return res.status(500).send({ message: 'Error when trying to retrieve all the users.' });

            if (!users) return res.status(404).send({ message: 'No users to show.' });

            return res.status(200).send({ users: users });
        });

    },

    updateUser: function (req, res) {
        var userId = req.params.id;
        var update = req.body;

        User.findByIdAndUpdate(userId, update, { new: true }, (err, userUpdated) => {
            if (err) return res.status(500).send({ message: 'Error when trying to update the given user.' });

            if (!userUpdated) return res.status(404).send({ message: `Given user doen't exist.` });

            return res.status(200).send({
                user: userUpdated
            });
        });

    },

    deleteUser: function (req, res) {
        var userId = req.params.id;

        User.findByIdAndRemove(userId, (err, userRemoved) => {
            if (err) return res.status(500).send({ message: 'Error when trying to remove the given user.' });

            if (!userRemoved) return res.status(404).send({ message: "Can't remove the given user." });

            return res.status(200).send({
                user: userRemoved
            });
        });
    },

};

module.exports = controller;