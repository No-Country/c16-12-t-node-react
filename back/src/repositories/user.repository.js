import customeError from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }

  async getUserByEmail(email) {
    let user;
    try {
      user = await this.model.findOne({ email });
    } catch (error) {
      throw customeError.serverError(`${error}`);
    }
    return user;
  }
}
