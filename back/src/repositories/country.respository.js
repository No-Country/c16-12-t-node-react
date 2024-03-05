import { CustomeError } from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class CountryRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }

  async deleteCountrById(id) {
    try {
      const country = await this.model.findOne({ where: { id } });
      if (!country) {
        return null;
      }
      return await this.model.destroy({ where: { id } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
