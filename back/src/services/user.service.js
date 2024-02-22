import { CustomeError } from '../errors/index.js';
import { Validator } from '../helpers/validator.helper.js';

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

  async updateUserById(updateDto) {
    const { id, ...data } = updateDto;

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
    if (!id) throw CustomeError.badRequest('Id is required');
    if (!Validator.validateId(id)) throw CustomeError.badRequest(`Invalid id: '${id}'`);
  }

  exeption(user) {
    if (!user) throw CustomeError.notFound('User not found');
  }
}
