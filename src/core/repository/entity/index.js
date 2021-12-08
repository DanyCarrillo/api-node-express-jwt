const {Movie, MovieEntity} = require('./movie.entity');
const {Status, StatusEntity} = require('./status.entity');
const {Genre, GenreEntity} = require('./genre.entity');
const {Gender, GenderEntity} = require('./gender.entity');
const {Role, RoleEntity} = require('./role.entity');


function setupEntity(sequelize) {
  Status.init(StatusEntity, Status.config(sequelize));
  Movie.init(MovieEntity, Movie.config(sequelize));
  Genre.init(GenreEntity, Genre.config(sequelize));
  Gender.init(GenderEntity, Gender.config(sequelize));
  Role.init(RoleEntity, Role.config(sequelize));
  Status.associate(sequelize.models);
  Genre.associate(sequelize.models);
  Movie.associate(sequelize.models);


}

module.exports = setupEntity;
