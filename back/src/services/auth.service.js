import { BaseService } from './base.service.js';

let _repository = null;

export class AuthService extends BaseService {
  constructor({ repository }) {
    super({ repository });
    _repository = repository;
  }

  async login(data) {
    return _repository.getUserByEmail(data.email);
  }

  async register(data) {
    return _repository.create(data);
  }
}
