const { Model, DataTypes, Sequelize } = require('sequelize');
const {T_USERS, T_ROLES, T_STATUS} = require('../../../utils/constants/database.constants');

const UserEntity = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoverUrl: {
    field: 'recover_url',
    allowNull: true,
    type: DataTypes.STRING
  },
  roleId: {
    field: 'id_role',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_ROLES,
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
  created: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  modified: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }

}

class User extends Model {
  static associate(models) {
    this.belongsTo(models.Role, {as: 'role'});
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: T_USERS,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { T_USERS, UserEntity, User }
