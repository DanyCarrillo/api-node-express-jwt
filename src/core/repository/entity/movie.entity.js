const { Model, DataTypes, Sequelize } = require('sequelize');
const {T_MOVIES, T_STATUS, T_GENRES} = require('../../../utils/constants/database.constants');


const MovieEntity = {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  genreId: {
    field: 'id_genre',
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
  premiereDate: {
    allowNull: false,
    type: DataTypes.DATE
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

class Movie extends Model {

  static associate(models) {
    this.belongsTo(models.Status, {as: 'status'});
    this.belongsTo(models.Genre, {as: 'genre'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: T_MOVIES,
      modelName: 'Movie',
      timestamps: false
    }
  }
}


module.exports = { T_MOVIES, MovieEntity, Movie }
