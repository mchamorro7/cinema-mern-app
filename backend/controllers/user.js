'use strict'

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');

var User = require('../models/user');


// Controller

var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: 'Home visited'
        });
    },


    saveUser: async function (req, res) {
        var user = new User();
        var params = req.body;

        // Validate data before use it
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // Check if the user is already in database
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send('Email already exists.');

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.user_password, salt);

        // Create new user with the hashed password
        user.user_name = params.user_name;
        user.user_password = hashedPassword;
        user.first_name = params.first_name;
        user.last_name = params.last_name;
        user.email = params.email;

        await user.save((err, userStored) => {

            if (err) return res.status(500).send({ message: 'Error when trying to save user.' });

            if (!userStored) return res.status(404).send({ message: `Can't save the new user.` });

            return res.status(200).send({ user: userStored._id });
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

    loginUser: async function (req, res) {
        // Validate data before use it
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // Check if the email exist
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('Email or password invalid.');

        // Check if password is correct
        const validPassword = await bcrypt.compare(req.body.user_password, user.user_password);
        if (!validPassword) return res.status(400).send('Email or password invalid.');

        // Should add a JWTs
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).status(200).send('Log in successfully.');
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