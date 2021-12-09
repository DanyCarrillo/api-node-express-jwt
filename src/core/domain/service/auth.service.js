const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { config } = require('../../../config/config');
const STATUS = require('../../../utils/constants/status.constants');
const UserService = require('./user.service');
const userService = new UserService();

class AuthService {

  async getUser(email, password) {
    const user = await userService.findByEmail(email);

    if (!user) {
      throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw boom.unauthorized();;
    }

    if(user.statusId === STATUS.DISABLE){
      throw boom.locked();
    }

    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      roleId: user.roleId
    }
    const token = jwt.sign(payload, config.jwtSecret);
    console.log('token:: ',token)
    return {
      user,
      token
    };
  }

}

module.exports = AuthService;
