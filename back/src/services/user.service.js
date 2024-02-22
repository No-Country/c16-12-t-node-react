import { CustomeError } from '../errors/index.js';

export class UserService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllUsers() {
    return await this.repository.getAllUsers();
  }
  async getUserById(id) {
    this.validateId(id);
    const user = await this.repository.getUserById(id);
    this.exeption(user);
    return user;
  }

  async updateUserById(id, data) {
    this.validateId(id);
    const userData = await this.repository.update(id, { ...data });
    this.exeption(userData);

    const { password, ...user } = userData.dataValues;
    return user;
  }

  async deleteUserById(id) {
    this.validateId(id);
    const user = await this.repository.delete(id);
    this.exeption(user);
    return user;
  }

  validateId(id) {
    if (!id) throw CustomeError.badRequest('User Id is required');
    if (isNaN(id)) throw CustomeError.badRequest('User Id must be a number');
  }

  exeption(user) {
    if (!user) throw CustomeError.notFound('User not found');
  }
}
