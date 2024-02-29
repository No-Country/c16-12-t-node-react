import { BaseRepository } from './base.repository.js';

export class CitiesRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }

  async getCityByName(name) {
    // implementation on database

    return await this.model.findAll({
      name: name,
    });
  }
}
