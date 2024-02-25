import { CustomeError } from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class CitiesRepository extends BaseRepository {
  constructor({ cityModel, countryModel }) {
    super({ model: cityModel });
    this.cityModel = cityModel;
    this.countryModel = countryModel;
  }

  async createCity(data) {
    let cityExists, countryExists;
    try {
      cityExists = await this.getCityByName(data.name);
      countryExists = await this.getCountryById(data.countryId);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }

    if (cityExists) throw CustomeError.badRequest(`City with name '${data.name}' already exists`);
    if (!countryExists)
      throw CustomeError.badRequest(`Country with id '${data.countryId}' not found`);

    try {
      return await this.cityModel.create({
        ...data,
        zip_code: data.zipCode,
        country_id: data.countryId,
      });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getCityByName(name) {
    return await this.cityModel.findOne({ where: { name } });
  }

  async getCountryById(id) {
    return await this.countryModel.findOne({ where: { id } });
  }
}
