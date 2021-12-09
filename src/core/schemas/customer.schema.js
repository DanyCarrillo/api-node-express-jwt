const NUMBERS = require('../../utils/constants/numbers.constants');

const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(NUMBERS.TWO);
const lastName = Joi.string().min(NUMBERS.TWO);
const phone =  Joi.number().integer().min(NUMBERS.SEVEN);
const avatar = Joi.string();
const age = Joi.number();
const userId = Joi.number().integer();
const genderId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string().min(NUMBERS.EIGTH);
const roleId = Joi.number().integer();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  avatar: avatar,
  age: age.required(),
  genderId: genderId.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
    roleId: roleId.required()
  })
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  avatar,
  age,
  userId
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
