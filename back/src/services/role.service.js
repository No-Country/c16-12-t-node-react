import { CustomeError } from '../errors/index.js';

export class RoleService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllRoles() {
    return await this.repository.getAll();
  }

  async create(role) {
    const response = await this.repository.createRole(role);
    if (!response) throw CustomeError.notAcceptable(`Role '${role.name}' already exists`);
    return response;
  }

  async update(id, data) {
    return await this.repository.update(id, data);
  }

  async delete(id) {
    return await this.repository.delete(id);
  }
}
