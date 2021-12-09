const NUMBERS = require('../../utils/constants/numbers.constants');

const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string().min(NUMBERS.TWO);

const getGenreSchema = Joi.object({
  id: id.required(),
});

const createGenreSchema = Joi.object({
  description: description.required()
});

const updateGenreSchema = Joi.object({
  description
});

module.exports = { getGenreSchema, createGenreSchema, updateGenreSchema };

