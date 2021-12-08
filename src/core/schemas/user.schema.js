const NUMBERS = require('../../utils/constants/numbers.constants');

const Joi = require('joi');


const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(NUMBERS.EIGTH)
const roleId = Joi.number().integer().max(NUMBERS.ONE);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  roleId: roleId.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  roleId: roleId
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
