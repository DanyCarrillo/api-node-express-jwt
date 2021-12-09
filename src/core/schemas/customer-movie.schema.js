const Joi = require('joi');

const id = Joi.number().integer();
const costumerId = Joi.number().integer();
const movieId = Joi.number().integer();

const getCustomerMovieSchema = Joi.object({
  id: id.required(),
});

const createCustomerMovieSchema = Joi.object({
  costumerId: costumerId.required(),
  movieId: movieId.required()
});

const updateCustomerMovieSchema = Joi.object({
  costumerId,
  movieId
});

module.exports = { getCustomerMovieSchema, createCustomerMovieSchema, updateCustomerMovieSchema };

