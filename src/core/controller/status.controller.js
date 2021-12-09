const express = require('express');
const StatusService = require('../domain/service/status.service');
const statusService = new StatusService()

const statusController = express.Router();


statusController.get('/', async (req, res, next) => {
  try {
    const colors = await statusService.find();
    res.json(colors)
  } catch (error) {
    next(error);
  }
})


statusController.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const status = await statusService.findOne(id);
    res.json(status)
  } catch (error) {
    next(error);
  }
});

statusController.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const status = await statusService.create(body);
    res.json(status)
  } catch (error) {
    next(error);
  }
})

statusController.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const status = await statusService.update(id, body);
    res.json(status)
  } catch (error) {
    next(error);
  }
})

module.exports = statusController;
