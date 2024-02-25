export class FromToService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllFromTo() {
    return await this.repository.getAll();
  }

  async getFromToById(id) {
    return this.repository.getById(id);
  }

  async createFromTo(data) {
    return this.repository.create(data);
  }

  async updateFromToById(id, data) {
    return this.repository.update(id, data);
  }

  async deleteFromToById(id) {
    return this.repository.delete(id);
  }
}
