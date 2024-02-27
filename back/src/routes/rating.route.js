import express from 'express';

import { RatingController } from '../controller/index.js';
import { RatingService } from '../services/index.js';
import { RatingRepository } from '../repositories/index.js';
import { Rating, User } from '../db/mysql/models/index.js';
import { AuthMiddleware } from '../middleware/index.js';

export class RatingRoute {
  static routes() {
    const router = express.Router();

    const repository = new RatingRepository({ ratingModel: Rating, userModel: User });
    const service = new RatingService({ repository });
    const controller = new RatingController({ service });

    router.get('/', controller.getAllUserRating.bind(controller));
    router.post('/', [AuthMiddleware.authentication], controller.createUserRating.bind(controller));
    router.patch(
      '/:id',
      [AuthMiddleware.authentication],
      controller.updateUserRating.bind(controller),
    );

    return router;
  }
}
