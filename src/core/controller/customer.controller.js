const express = require('express');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.middleware');
const ROLES = require('../../utils/constants/role.constants');
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require('../schemas/customer.schema');
const valdatorMiddleware = require('../middlewares/validator.middleware');
const CustomerService = require('../domain/service/customer.service');
const customerService = new CustomerService()

const customerController = express.Router();


customerController.get('/',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.ADMIN),
async (req, res, next) => {
  try {
    const customer = await customerService.find();
    res.json(customer)
  } catch (error) {
    next(error);
  }
});

customerController.get('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.USER),
valdatorMiddleware(getCustomerSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await customerService.findOne(id);
    res.json(customer)
  } catch (error) {
    next(error);
  }
});

customerController.post('/',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.USER, ROLES.ADMIN),
valdatorMiddleware(createCustomerSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const customer = await customerService.create(body);
    res.json(customer)
  } catch (error) {
    next(error);
  }
})

customerController.patch('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.USER, ROLES.ADMIN),
valdatorMiddleware(getCustomerSchema, 'params'),
valdatorMiddleware(updateCustomerSchema, 'body'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const customer = await customerService.update(id, body);
    res.json(customer)
  } catch (error) {
    next(error);
  }
})

customerController.delete('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.ADMIN),
valdatorMiddleware(getCustomerSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await customerService.delete(id);
    res.json(customer)
  } catch (error) {
    next(error);
  }
})

customerController.delete('/:id/disable',
passport.authenticate('jwt', {session: false}),
checkRoles(ROLES.ADMIN),
valdatorMiddleware(getCustomerSchema, 'params'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await customerService.desable(id);
    res.json(customer)
  } catch (error) {
    next(error);
  }
})

module.exports = customerController;
