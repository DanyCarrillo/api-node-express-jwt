const express = require('express');
const RoleService = require('../domain/service/role.service');
const roleService = new RoleService()

const roleController = express.Router();


roleController.get('/', async (req, res, next) => {
  try {
    const colors = await roleService.find();
    res.json(colors)
  } catch (error) {
    next(error);
  }
})


roleController.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const role = await roleService.findOne(id);
    res.json(role)
  } catch (error) {
    next(error);
  }
});

roleController.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const role = await roleService.create(body);
    res.json(role)
  } catch (error) {
    next(error);
  }
})

roleController.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const role = await roleService.update(id, body);
    res.json(role)
  } catch (error) {
    next(error);
  }
})

module.exports = roleController;
