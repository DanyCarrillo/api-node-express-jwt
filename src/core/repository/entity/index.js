const {Movies, MoviesEntity} = require('./movie.entity');
const {Status, StatusEntity} = require('./status.entity');
const {Genre, GenreEntity} = require('./genre.entity');
const {Gender, GenderEntity} = require('./gender.entity');
const {Role, RoleEntity} = require('./role.entity');
const {User, UserEntity} = require('./user.entity');
const {Customer, CustomerEntity} = require('./customer.entity');

function setupEntity(sequelize) {
  Status.init(StatusEntity, Status.config(sequelize));
  Movies.init(MoviesEntity, Movies.config(sequelize));
  Genre.init(GenreEntity, Genre.config(sequelize));
  Gender.init(GenderEntity, Gender.config(sequelize));
  Role.init(RoleEntity, Role.config(sequelize));
  User.init(UserEntity, User.config(sequelize));
  Customer.init(CustomerEntity, Customer.config(sequelize));

  Status.associate(sequelize.models);
  Genre.associate(sequelize.models);
  Role.associate(sequelize.models);
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);


}

module.exports = setupEntity;
