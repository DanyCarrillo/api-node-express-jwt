const { Model, DataTypes } = require('sequelize');
const {T_ROLES} = require('../../../utils/constants/database.constants');

const RoleEntity = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Role extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      as: 'users',
      foreignKey: 'roleId'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: T_ROLES,
      modelName: 'Role',
      timestamps: false
    }
  }
}


module.exports = { T_ROLES, RoleEntity, Role }
