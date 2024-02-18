import customeError from '../errors/custome.error.js';

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

  async udpateUserById(id, data) {
    this.validateId(id);
    const user = await this.repository.update(id, { ...data });
    this.exeption(user);
    return user;
  }

  async deleteUserById(id) {
    this.validateId(id);
    const user = await this.repository.delete(id);
    this.exeption(user);
    return user;
  }

  validateId(id) {
    if (!id) throw customeError.badRequest('User Id is required');
    if (isNaN(id)) throw customeError.badRequest('User Id must be a number');
  }

  exeption(user) {
    if (!user) throw customeError.notFound('User not found');
  }
}