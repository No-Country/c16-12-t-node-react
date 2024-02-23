import { CustomeError } from '../errors/index.js';

export class BaseRepository {
  constructor({ model }) {
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getById(id) {
    try {
      return await this.model.findOne({ where: { id } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async update(id, data) {
    try {
      const item = await this.getById(id);
      if (!item) {
        return null;
      }

      const res = await this.model.update(data, { where: { id } });
      if (res.at(0) > 0) {
        return this.getById(id);
      }
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({ where: { id } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
