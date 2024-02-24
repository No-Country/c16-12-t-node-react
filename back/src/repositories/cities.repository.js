import { BaseRepository } from './base.repository.js';

export class CitiesRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }

  async getCityByName(name) {
    return await this.model.findAll({ where: { name } });
  }
}
