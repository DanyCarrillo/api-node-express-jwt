const express = require('express');

const movieController = require('../controller/movie.controller');
const statusController = require('../controller/status.controller');
const roleController = require('../controller/role.controller');
const genderController = require('../controller/gender.controller');
const genreController = require('../controller/genre.controller');
const authController = require('../controller/auth.controller');
const customerController = require('../controller/customer.controller');
const userController = require('../controller/user.controller');
// const customerMovieController = require('../controller/customer-movie.controller');


function routerApi(app){

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/movies', movieController);
  router.use('/status', statusController);
  router.use('/roles', roleController);
  router.use('/genders', genderController);
  router.use('/genres', genreController);
  router.use('/auth', authController);
  router.use('/users', userController);
  router.use('/customers', customerController);
  // router.use('/', customerMovieController);



}

module.exports = routerApi;
