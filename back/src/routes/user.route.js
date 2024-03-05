import express from 'express';

import { UserController } from '../controller/index.js';
import { UserRepository } from '../repositories/index.js';
import { UserService } from '../services/index.js';
import { City, Role, User } from '../db/mysql/models/index.js';
import { AuthMiddleware } from '../middleware/index.js';

export class UserRoute {
  static routes() {
    const router = express.Router();

    const repository = new UserRepository({ userModel: User, roleModel: Role, cityModel: City });
    const service = new UserService({ repository });
    const controller = new UserController({ service });

    router.get('/', controller.getAllUsers.bind(controller));
    router.get('/:id', [AuthMiddleware.authentication], controller.getUserById.bind(controller));
    router.patch(
      '/:id',
      [AuthMiddleware.authentication],
      controller.updateUserById.bind(controller),
    );
    router.delete(
      '/:id',
      [AuthMiddleware.authentication],
      controller.deleteUserById.bind(controller),
    );

    return router;
  }
}
