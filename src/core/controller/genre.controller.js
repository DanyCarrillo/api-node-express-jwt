const express = require('express');
const GenreService = require('../domain/service/genre.service');
const genreService = new GenreService()

const genreController = express.Router();


genreController.get('/', async (req, res, next) => {
  try {
    const genre = await genreService.find();
    res.json(genre)
  } catch (error) {
    next(error);
  }
})

genreController.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await genreService.findOne(id);
    res.json(genre)
  } catch (error) {
    next(error);
  }
});

genreController.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const genre = await genreService.create(body);
    res.json(genre)
  } catch (error) {
    next(error);
  }
})

genreController.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const genre = await genreService.update(id, body);
    res.json(genre)
  } catch (error) {
    next(error);
  }
})

module.exports = genreController;
