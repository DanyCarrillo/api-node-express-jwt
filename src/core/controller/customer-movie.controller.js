const express = require('express');
const passport = require('passport');
const valdatorMiddleware = require('../middlewares/validator.middleware');
const { checkRoles } = require('../middlewares/auth.middleware');
const ROLES = require('../../utils/constants/role.constants');
const { getCustomerMovieSchema, createCustomerMovieSchema, updateCustomerMovieSchema } = require('../schemas/customer-movie.schema')
const CustomerMovieService = require('../domain/service/customer-movie.service');
const customerMovieService = new CustomerMovieService()

const customerMovieController = express.Router();


customerMovieController.get('/',
checkRoles(ROLES.ADMIN, ROLES.USER),
passport.authenticate('jwt', {session: false}),
async (req, res, next) => {
  try {
    const customerMovie = await customerMovieService.find();
    res.json(customerMovie)
  } catch (error) {
    next(error);
  }
});

customerMovieController.get('/:id',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getCustomerMovieSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerMovie = await customerMovieService.findOne(id);
    res.json(customerMovie)
  } catch (error) {
    next(error);
  }
});

customerMovieController.post('/',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(createCustomerMovieSchema, 'body'),
 async (req, res, next) => {
  try {
    const body = req.body;
    const customerMovie = await customerMovieService.create(body);
    res.json(customerMovie)
  } catch (error) {
    next(error);
  }
})

customerMovieController.patch('/:id',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getCustomerMovieSchema, 'params'),
valdatorMiddleware(updateCustomerMovieSchema, 'body'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const customerMovie = await customerMovieService.update(id, body);
    res.json(customerMovie)
  } catch (error) {
    next(error);
  }
})

customerMovieController.delete('/:id',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getCustomerMovieSchema, 'params'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerMovie = await customerMovieService.delete(id);
    res.json(customerMovie)
  } catch (error) {
    next(error);
  }
})

module.exports = customerMovieController;
