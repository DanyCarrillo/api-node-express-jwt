const express = require('express');
const MovieService = require('../domain/service/movie.service');
const movieService = new MovieService()

const movieController = express.Router();


movieController.get('/', async (req, res, next) => {
  try {
    const colors = await movieService.find();
    res.json(colors)
  } catch (error) {
    next(error);
  }
})

module.exports = movieController;
