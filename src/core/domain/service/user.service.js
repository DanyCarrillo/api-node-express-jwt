const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const NUMBERS = require('../../../utils/constants/numbers.constants');
const UserRepository = require('../../repository/service/user.repository');
const userRepository = new UserRepository();

class UserService {
  constructor(){}

  async find(){
    return await userRepository.find();
  }

  async findOne(identifier){
    return await userRepository.findOne(identifier);
  }

  async findByEmail(email){
    return await userRepository.findByEmail(email);
  }

  async create(data){
    data.statusId = NUMBERS.ONE;
    const hash = await bcrypt.hash(data.password, NUMBERS.THEN);
    const newUser = await userRepository.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async update(identifier, changes){
    const user = await userRepository.findOne(identifier);
    if(!user){
      throw boom.notFound('user not found');
    }
    return await userRepository.update(identifier, changes);
  }

  async delete(identifier){
    const user = await userRepository.findOne(identifier);
    if(!user){
      throw boom.notFound('user not found');
    }
    return await userRepository.delete(identifier);
  }
}

module.exports = UserService;
