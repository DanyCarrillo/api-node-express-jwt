const { Model, DataTypes, Sequelize } = require('sequelize');
const {T_MOVIES, T_STATUS, T_GENRES} = require('../../../utils/constants/database.constants');


const MoviesEntity = {
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
    type: DataTypes.TEXT
  },
  urlImage: {
    field: 'image_url',
    allowNull: false,
    type: DataTypes.STRING
  },
  premiereDate: {
    field: 'premiere_date',
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
  }
}

class Movies extends Model {
  static associate(models) {
    this.belongsTo(models.Genre,{ as: 'genres' });
    this.belongsTo(models.Status,{ as: 'status' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: T_MOVIES,
      modelName: 'Movies',
      timestamps: false
    }
  }
}


module.exports = { T_MOVIES, MoviesEntity, Movies }
