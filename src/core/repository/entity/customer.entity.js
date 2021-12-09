const { Model, DataTypes } = require('sequelize');
const {T_CUSTOMERS, T_USERS, T_GENRES, T_STATUS} = require('../../../utils/constants/database.constants');

const CustomerEntity = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    field: 'lastname',
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  avatar: {
    allowNull: false,
    type: DataTypes.STRING
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  genderId: {
    field: 'id_gender',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_GENRES,
      key: 'id'
    }
  },
  statusId: {
    field: 'id_status',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_STATUS,
      key: 'id'
    }
  },
  userId: {
    field: 'id_user',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_USERS,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

}

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, {as: 'user'});
    this.belongsTo(models.Status, {as: 'status'});
    this.belongsTo(models.Gender, {as: 'gender'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: T_CUSTOMERS,
      modelName: 'Customer',
      timestamps: false
    }
  }
}


module.exports = { T_CUSTOMERS, CustomerEntity, Customer }
