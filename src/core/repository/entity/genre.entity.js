const { Model, DataTypes } = require('sequelize');
const {T_GENRES} = require('../../../utils/constants/database.constants');

const GenreEntity = {
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

class Genre extends Model {
  static associate(models) {
    this.hasMany(models.Movie, {
      as: 'movie',
      foreignKey: 'genreId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: T_GENRES,
      modelName: 'Genre',
      timestamps: false
    }
  }
}


module.exports = { T_GENRES, GenreEntity, Genre }
