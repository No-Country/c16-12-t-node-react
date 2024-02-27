import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class CreateRatingDto {
  constructor({ rating, rated_user_id, rating_user_id, comment }) {
    this.rating = rating;
    this.rated_user_id = rated_user_id;
    this.rating_user_id = rating_user_id;
    this.comment = comment;
  }

  static create(props) {
    const { user, rating, rated_user_id, comment } = props;
    const ratingFields = {
      rating: 'rating',
      rated_user_id: 'rated_user_id',
    };

    for (const field in ratingFields) {
      if (!props[field]) {
        return [CustomeError.badRequest(`Missing '${ratingFields[field]}' property in request`)];
      }
    }

    if (!Validator.validateRating(rating))
      return [CustomeError.badRequest(`Field rating '${rating}' must be a number`)];

    if (!Validator.validateId(rated_user_id))
      return [CustomeError.badRequest(`Field rated_user_id '${rated_user_id}' must be a number`)];

    if (!Validator.validateId(user.id))
      return [CustomeError.badRequest(`Field rating_user_id '${user.id}' must be a number`)];

    return [
      undefined,
      new CreateRatingDto({
        rating,
        rated_user_id,
        rating_user_id: user.id,
        comment,
      }),
    ];
  }
}
