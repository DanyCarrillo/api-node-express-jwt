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

module.exports = statusController;
