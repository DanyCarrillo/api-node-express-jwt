const { models } = require('../../../libs/sequelize');

class GenreRepository{

  async find(){
    return await models.Genre.findAll()
  }
  async findOne(identifier){
    return await models.Genre.findOne({
      where: { id: identifier}
    })
  }

  async create(data){
    return await models.Genre.create(data);
  }

  async update(identifier, changes){
    const genre = await this.findOne(identifier);
    return  await genre.update(changes)
  }


}

module.exports = GenreRepository;
