const { Model, DataTypes, Sequelize } = require('sequelize');
const {T_CUSTOMER_MOVIE,T_CUSTOMERS, T_MOVIES, T_STATUS} = require('../../../utils/constants/database.constants');

const CustomerMoviesEntity = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'id_customer',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_CUSTOMERS,
      key: 'id'
    }
  },
  movieId: {
    field: 'id_movie',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_MOVIES,
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

class CustomerMovies extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {as: 'customer'});
    this.belongsTo(models.Movies, {as: 'movies'});
    this.belongsTo(models.Status, {as: 'status'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: T_CUSTOMER_MOVIE,
      modelName: 'CustomerMovies',
      timestamps: false
    }
  }
}


module.exports = { T_CUSTOMER_MOVIE, CustomerMoviesEntity, CustomerMovies }
