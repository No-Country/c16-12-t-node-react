export class CitiesService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllCities() {
    return await this.repository.getAll();
  }

  async getById(id) {
    return this.repository.getById(id);
  }

  async create(data) {
    return this.repository.create(data);
  }

  async update(id, data) {
    return this.repository.update(id, data);
  }

  async delete(id) {
    return this.repository.delete(id);
  }
}
