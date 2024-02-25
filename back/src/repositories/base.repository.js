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
    let entity;
    try {
      entity = await this.model.findOne({ where: { id } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
    if (!entity) throw CustomeError.notFound(`${this.model.name} with id '${id}' not found`);
    return entity;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async update(id, data) {
    await this.getById(id);

    try {
      const res = await this.model.update(data, { where: { id } });
      if (res.at(0) > 0) {
        return this.getById(id);
      }
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async delete(id) {
    await this.getById(id);

    try {
      const entityDeleted = await this.model.destroy({ where: { id } });
      if (entityDeleted) return true;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
