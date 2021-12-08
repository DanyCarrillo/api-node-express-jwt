const NUMBERS = require('../../utils/constants/numbers.constants');

const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string().min(NUMBERS.TWO);

const getGenderSchema = Joi.object({
  id: id.required(),
});

const createGenderSchema = Joi.object({
  description: description.required()
});

const updateGenderSchema = Joi.object({
  description
});

module.exports = { getGenderSchema, createGenderSchema, updateGenderSchema };

