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

genderController.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const gender = await genderService.findOne(id);
    res.json(gender)
  } catch (error) {
    next(error);
  }
});

genderController.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const gender = await genderService.create(body);
    res.json(gender)
  } catch (error) {
    next(error);
  }
})

genderController.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const gender = await genderService.update(id, body);
    res.json(gender)
  } catch (error) {
    next(error);
  }
})

module.exports = genderController;
