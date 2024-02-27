import { CustomeError } from '../errors/index.js';
import { Validator } from '../helpers/validator.helper.js';

export class CitiesService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllCities() {
    return await this.repository.getCities();
  }

  async getById(id) {
    this.validateId(id);
    return await this.repository.getCityById(id);
  }

  async create(data) {
    return await this.repository.createCity(data);
  }

  async update(data) {
    const { id, ...rest } = data;

    return this.repository.updateCity(id, {
      ...rest,
      zip_code: rest.zipCode,
      country_id: rest.countryId,
    });
  }

  async delete(id) {
    this.validateId(id);
    return this.repository.delete(id);
  }

  validateId(id) {
    if (!Validator.validateId(id)) throw CustomeError.badRequest(`Invalid id: '${id}'`);
  }
}
