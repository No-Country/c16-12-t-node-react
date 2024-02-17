export class BaseRepository {
  constructor({ model }) {
    this.model = model;
  }

  async getAll({ page, limit }) {
    throw new Error('Method not implemented.');
  }

  async getById(id) {
    throw new Error('Method not implemented.');
  }

  async create(data) {
    throw new Error('Method not implemented.');
  }

  async update(id, data) {
    throw new Error('Method not implemented.');
  }

  async delete(id) {
    throw new Error('Method not implemented.');
  }
}
