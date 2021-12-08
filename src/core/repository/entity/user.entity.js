const { Model, DataTypes } = require('sequelize');
const {T_STATUS} = require('../../../utils/constants/database.constants');

const StatusEntity = {
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

class Status extends Model {
  static associate(models) {
    this.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'statusId'
    });
  }


  static config(sequelize) {
    return {
      sequelize,
      tableName: T_STATUS,
      modelName: 'Status',
      timestamps: false
    }
  }
}


module.exports = { T_STATUS, StatusEntity, Status }
