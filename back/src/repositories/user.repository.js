import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }

  async getUserByEmail(email) {
    // todo: implementation on database

    // return await this.model.findOne({ email });
    return { email };
  }
}
