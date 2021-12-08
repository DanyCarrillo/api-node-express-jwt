const express = require('express');

const movieController = require('../controller/movie.controller');
const statusController = require('../controller/status.controller');
const roleController = require('../controller/role.controller');
const genderController = require('../controller/gender.controller');
const genreController = require('../controller/genre.controller');


function routerApi(app){

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/movies', movieController);
  router.use('/status', statusController);
  router.use('/roles', roleController);
  router.use('/genders', genderController);
  router.use('/genres', genreController);

}

module.exports = routerApi;
