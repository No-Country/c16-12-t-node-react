export class RatingService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllUserRating() {
    return await this.repository.getAll();
  }

  async createUserRating(data) {
    return await this.repository.createRating(data);
  }

  async updateUserRating(id, data) {
    return await this.repository.update(id, data);
  }
}
