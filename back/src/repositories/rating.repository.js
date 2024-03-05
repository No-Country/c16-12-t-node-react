import { CustomeError } from '../errors/custome.error.js';
import { BaseRepository } from './base.repository.js';

export class RatingRepository extends BaseRepository {
  constructor({ ratingModel, userModel }) {
    super({ model: ratingModel });
    this.ratinModel = ratingModel;
    this.userModel = userModel;
  }

  async getAllRatings() {
    try {
      const rating = await this.ratinModel.findAll();
      return rating;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async createRating(data) {
    const { rated_user_id } = data;

    const ratedUserExists = await this.userModel.findOne({ where: { id: rated_user_id } });
    if (!ratedUserExists) throw CustomeError.notFound(`User with id '${rated_user_id}' not found`);

    try {
      return await this.ratinModel.create(data);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
  async updateRating(id, data) {}
}
