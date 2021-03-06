const NUMBERS = require('../../utils/constants/numbers.constants');

const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(NUMBERS.TWO);
const description = Joi.string().min(NUMBERS.THEN);
const genreId = Joi.number().integer();
const premiereDate = Joi.date();
const urlImage = Joi.string();

const getMovieSchema = Joi.object({
  id: id.required(),
});

const createMovieSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  genreId: genreId.required(),
  urlImage: urlImage.required(),
  premiereDate: premiereDate.required(),
});

const updateMovieSchema = Joi.object({
  name,
  description,
  genreId,
  premiereDate,
  urlImage
});

module.exports = { createMovieSchema, getMovieSchema, updateMovieSchema };

