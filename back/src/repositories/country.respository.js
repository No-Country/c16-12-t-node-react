import customeError from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class CountryRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }

  // GET ALL COUNTRIES
  async getAllCountries() {
    try {
      return await this.model.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  //GET COUNTRIES BY ID
  async getAllCountriesById(id) {
    try {
      const country = await this.model.findOne({ where: { id } });
      if (!country) return { message: 'The country cannot be found' };
      return country;
    } catch (error) {
      throw customeError.serverError(`${error}`);
    }
  }
}
