import { BcryptAdapter } from '../config/adapters/bcrypt.adapter.js';
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
    return await this.repository.getUserById(id);
  }

  async updateUserById(updateDto) {
    const { id, ...data } = updateDto;

    let passWordHashed;
    if (data?.password) {
      passWordHashed = BcryptAdapter.hash(data.password);
    }

    return await this.repository.updateUser(id, { ...data, passWordHashed });
  }

  async deleteUserById(id) {
    this.validateId(id);
    return await this.repository.deleteUser(id);
  }

  async updateUserRating(userId, rating) {
    this.validateId(userId);
    return await this.repository.updateUserRating(userId, rating);
  }

  validateId(id) {
    if (!id) throw CustomeError.badRequest('Id is required');
    if (!Validator.validateId(id)) throw CustomeError.badRequest(`Invalid id: '${id}'`);
  }
}
