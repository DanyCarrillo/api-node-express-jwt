const { Model, DataTypes } = require('sequelize');
const {T_GENDERS} = require('../../../utils/constants/database.constants');

const GenderEntity = {
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

class Gender extends Model {
  static associate(models) {
    this.hasMany(models.Customer, {
      as: 'customers',
      foreignKey: 'genderId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: T_GENDERS,
      modelName: 'Gender',
      timestamps: false
    }
  }
}


module.exports = { T_GENDERS, GenderEntity, Gender }
