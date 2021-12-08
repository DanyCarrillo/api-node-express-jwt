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

module.exports = roleController;
