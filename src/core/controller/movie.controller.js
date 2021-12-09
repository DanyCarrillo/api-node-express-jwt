const express = require('express');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.middleware');
const ROLES = require('../../utils/constants/role.constants');
const valdatorMiddleware = require('../middlewares/validator.middleware');
const { createMovieSchema, getMovieSchema, updateMovieSchema } = require('../schemas/movie.schema')
const MovieService = require('../domain/service/movie.service');
const movieService = new MovieService()

const movieController = express.Router();


movieController.get('/',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.USER),
async (req, res, next) => {
  try {
    const movies = await movieService.find();
    res.json(movies)
  } catch (error) {
    next(error);
  }
});

movieController.get('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.USER),
valdatorMiddleware(getMovieSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await movieService.findOne(id);
    res.json(movie)
  } catch (error) {
    next(error);
  }
});

movieController.post('/',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.ADMIN),
valdatorMiddleware(createMovieSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const movie = await movieService.create(body);
    res.json(movie)
  } catch (error) {
    next(error);
  }
})

movieController.patch('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.ADMIN),
valdatorMiddleware(getMovieSchema, 'params'),
valdatorMiddleware(updateMovieSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const movie = await movieService.update(id, body);
    res.json(movie)
  } catch (error) {
    next(error);
  }
})

movieController.delete('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.ADMIN),
valdatorMiddleware(getMovieSchema, 'params'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await movieService.delete(id);
    res.json(movie)
  } catch (error) {
    next(error);
  }
})

module.exports = movieController;
