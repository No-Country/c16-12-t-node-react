export class AuthService {
  constructor({ repository }) {
    super({ repository });
    this.repository = repository;
  }

  async login(data) {
    return await this.repository.getUserByEmail(data.email);
  }

  async register(data) {
    return await this.repository.create(data);
  }
}
