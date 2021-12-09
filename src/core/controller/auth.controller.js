const express = require('express');
const passport = require('passport');

const AuthService = require('../domain/service/auth.service');
const authService = new AuthService();

const authController = express.Router();

authController.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(authService.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = authController;
