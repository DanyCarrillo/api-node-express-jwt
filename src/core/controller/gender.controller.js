const express = require('express');
const GenderService = require('../domain/service/gender.service');
const genderService = new GenderService()

const genderController = express.Router();


genderController.get('/', async (req, res, next) => {
  try {
    const colors = await genderService.find();
    res.json(colors)
  } catch (error) {
    next(error);
  }
})

module.exports = genderController;
