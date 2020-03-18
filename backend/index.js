'use strict'

const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://database/admin', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB from backend");
    app.listen(4200, () => console.log('Server on port 4200'));
  })
  .catch(err => console.log("Error trying to connect to MongoDB", err))




