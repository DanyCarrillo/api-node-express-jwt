const express = require('express');
const passport = require('passport');
const { getUserSchema, createUserSchema, updateUserSchema } = require('../schemas/user.schema');
const valdatorMiddleware = require('../middlewares/validator.middleware');
const UserService = require('../domain/service/user.service');
const userService = new UserService()

const userController = express.Router();


userController.get('/',
passport.authenticate('jwt', {session: false}),
async (req, res, next) => {
  try {
    const user = await userService.find();
    res.json(user)
  } catch (error) {
    next(error);
  }
});

userController.get('/:id',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.findOne(id);
    res.json(user)
  } catch (error) {
    next(error);
  }
});

userController.post('/',
// passport.authenticate('jwt', {session: false}),
valdatorMiddleware(createUserSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const user = await userService.create(body);
    res.json(user)
  } catch (error) {
    next(error);
  }
})

userController.patch('/:id',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getUserSchema, 'params'),
valdatorMiddleware(updateUserSchema, 'body'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await userService.update(id, body);
    res.json(user)
  } catch (error) {
    next(error);
  }
})

userController.delete('/:id',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.delete(id);
    res.json(user)
  } catch (error) {
    next(error);
  }
})

userController.patch('/:id/disable',
passport.authenticate('jwt', {session: false}),
valdatorMiddleware(getUserSchema, 'params'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.delete(id);
    res.json(user)
  } catch (error) {
    next(error);
  }
})

module.exports = userController;
