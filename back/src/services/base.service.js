let _repository = null;

export class BaseService {
  constructor({ repository }) {
    _repository = repository;
  }

  async getHello() {
    return await _repository.getHello();
  }

  async getAll() {
    return await _repository.getAll();
  }

  async getById(id) {
    return await _repository.getById(id);
  }

  async create(data) {
    return await _repository.create(data);
  }

  async update(id, data) {
    return await _repository.update(id, data);
  }

  async delete(id) {
    return await _repository.delete(id);
  }
}
