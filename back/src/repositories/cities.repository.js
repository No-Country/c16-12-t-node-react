import { sequelize } from '../db/mysql/config/config.connection.js';
import { CustomeError } from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class CitiesRepository extends BaseRepository {
  constructor({ cityModel, countryModel }) {
    super({ model: cityModel });
    this.cityModel = cityModel;
    this.countryModel = countryModel;
  }

  async getCities() {
    const query = `
        SELECT c.id, c.name, c.zip_code, c.country_id, c.latitud, c.longitud
        FROM Cities c
        `;
    try {
      return await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getCityById(id) {
    const query = `
        SELECT c.id, c.name, c.zip_code, co.name AS country, c.latitud, c.longitud
        FROM Cities c
        INNER JOIN Countries co
          ON c.country_id = co.id
        WHERE c.id = ${id}
      `;

    try {
      const country = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
      return country.at(0);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async createCity(data) {
    const cityExists = await this.getCityByName(data.name);
    if (cityExists) throw CustomeError.badRequest(`City with name '${data.name}' already exists`);

    const countryExists = await this.getCountryById(data.countryId);

    if (!countryExists)
      throw CustomeError.badRequest(`Country with id '${data.countryId}' not found`);

    try {
      await this.cityModel.create({
        ...data,
        zip_code: data.zipCode,
        country_id: data.countryId,
      });

      const query = `
        SELECT c.id, c.name, c.zip_code, co.name AS country, c.latitud, c.longitud
        FROM Cities c
        INNER JOIN Countries co
          ON c.country_id = co.id
        WHERE c.name = '${data.name}'
        `;

      return await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async updateCity(id, data) {
    const query = `
          SELECT c.id, c.name, c.zip_code, co.name AS country, c.latitud, c.longitud
          FROM Cities c
          INNER JOIN Countries co
            ON c.country_id = co.id
          WHERE c.id = ${id}
        `;
    let cityUpdated;
    try {
      const response = await this.cityModel.update(data, { where: { id } });
      if (response.at(0) > 0) {
        cityUpdated = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
      } else {
        throw CustomeError.badRequest(`City with id '${id}' not found`);
      }
      return cityUpdated.at(0);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getCityByName(name) {
    try {
      return await this.cityModel.findOne({ where: { name } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getCountryById(id) {
    try {
      return await this.countryModel.findOne({ where: { id } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
