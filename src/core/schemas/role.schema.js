const NUMBERS = require('../../utils/constants/numbers.constants');

const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string().min(NUMBERS.TWO);

const getRoleSchema = Joi.object({
  id: id.required(),
});

const createRoleSchema = Joi.object({
  description: description.required()
});

const updateRoleSchema = Joi.object({
  description
});

module.exports = { getRoleSchema, createRoleSchema, updateRoleSchema };

