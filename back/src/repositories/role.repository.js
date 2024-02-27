import { CustomeError } from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class RoleRepository extends BaseRepository {
  constructor({ Role }) {
    super({ model: Role });
    this.role = Role;
  }

  async createRole(data) {
    try {
      const roleExists = await this.role.findOne({ where: { name: data.name } });
      if (roleExists) return null;
      return await this.role.create(data);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
