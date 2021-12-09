const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const NUMBERS = require('../../../utils/constants/numbers.constants');
const STATUS = require('../../../utils/constants/status.constants');
const CustomerRepository = require('../../repository/service/customer.repository');
const UserRepository = require('../../repository/service/user.repository');
const customerRepository = new CustomerRepository();
const userRepository = new UserRepository()
class CustomerService {
  constructor(){}

  async find(){
    return await customerRepository.find();
  }

  async findOne(identifier){
    return await customerRepository.findOne(identifier);
  }

  async create(data){
    data.statusId = NUMBERS.ONE;
    const hash = await bcrypt.hash(data.user.password, NUMBERS.THEN);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
        statusId: NUMBERS.ONE
      }
    }
    const newCustomer = await customerRepository.create(newData);
    delete newCustomer.dataValues.user.dataValues.password;
    return newCustomer;
  }

  async update(identifier, changes){
    const customer = await customerRepository.findOne(identifier);
    if(!customer){
      throw boom.notFound('Customer not found');
    }
    return await customerRepository.update(identifier, changes);
  }

  async delete(identifier){
    const customer = await customerRepository.findOne(identifier);
    if(!customer){
      throw boom.notFound('Customer not found');
    }

    if(customer.statusId === STATUS.INACTIVE){
      throw boom.notFound('Customer is already deleted');
    }

    return await customerRepository.delete(identifier);
  }

  async desable(identifier){
    const customer = await customerRepository.findOne(identifier);
    if(!customer){
      throw boom.notFound('Customer not found');
    }

    if(customer.statusId === STATUS.DISABLE){
      throw boom.notFound('Customer is already disabled');
    }

    await customerRepository.disable(identifier);
    await userRepository.disable(customer.userId);

    return { id: customer.id };
  }
}

module.exports = CustomerService;
