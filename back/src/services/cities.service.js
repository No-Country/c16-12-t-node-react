let _repository = null;

export class CitiesService {
  constructor({ repository }) {
        _repository: repository;
  }

  async getAll(limit, page) {
    return _repository.getAll(limit, page);
  }

  async getById(id) {
    return _repository.getById(id);
  }

  async create(data) {
    return _repository.create(data);
  }

  async update(id, data) {
    return _repository.update(id, data);
  }

  async delete(id) {
    return _repository.delete(id);
  }
}
