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
    try {
      const user = await this.model.findOne({ where: { id } });
      if (!user) return null;

      const { password, ...data } = user?.dataValues;
      return data;
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
}
