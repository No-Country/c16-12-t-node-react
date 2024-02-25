import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }

  async getAllUsers() {
    try {
      return await this.model.findAll({
        attributes: { exclude: ['password'] },
      });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getUserById(id) {
    const user = await this.findOne({ id });

    try {
      const { password, ...data } = user?.dataValues;
      return data;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async updateUser(id, data) {
    await this.findOne({ id });

    let userUpdated;
    try {
      const response = await this.model.update(
        { ...data, password: data.passWordHashed },
        { where: { id } },
      );

      if (response.at(0) > 0) {
        userUpdated = await this.findOne({ id });
      }

      const { password, ...user } = userUpdated.dataValues;
      return user;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async deleteUser(id) {
    await this.findOne({ id });
    try {
      const user = await this.model.destroy({ where: { id } });
      if (user) return true;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getUserByEmail(email) {
    try {
      return await this.model.findOne({ where: { email } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async findOne(query) {
    let entity;
    try {
      entity = await this.model.findOne({ where: query });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
    const res = Object.values(query);
    if (!entity) throw CustomeError.notFound(`${this.model.name} with '${res}' not found`);
    return entity;
  }
}
