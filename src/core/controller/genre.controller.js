const express = require('express');
const GenreService = require('../domain/service/genre.service');
const genreService = new GenreService()

const genreController = express.Router();


genreController.get('/', async (req, res, next) => {
  try {
    const colors = await genreService.find();
    res.json(colors)
  } catch (error) {
    next(error);
  }
})

module.exports = genreController;
