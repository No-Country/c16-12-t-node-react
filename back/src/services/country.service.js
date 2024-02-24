import { CustomeError } from '../errors/index.js';
import { Validator } from '../helpers/validator.helper.js';

export class CountryService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllCountries() {
    return await this.repository.getAll();
  }

  async getCountryById(id) {
    this.validateId(id);
    const country = await this.repository.getById(id);
    if (!country) throw CustomeError.badRequest(`Country with ${id} not found`);
    return country;
  }

  async createCountry(data) {
    return await this.repository.create(data);
  }

  async updateCountry(data) {
    const { id } = data;
    return await this.repository.update(id, { ...data });
  }

  async deleteCountryById(id) {
    this.validateId(id);
    return await this.repository.delete(id);
  }

  validateId(id) {
    if (!Validator.validateId(id))
      throw CustomeError.badRequest(`Country id must be a number: '${id}'`);
  }
}
