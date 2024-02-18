import express from 'express';

import { UserController } from '../controller/index.js';
import { UserRepository } from '../repositories/index.js';
import { UserService } from '../services/index.js';
import { User } from '../db/mysql/models/index.js';

export class UserRoute {
  static routes() {
    const router = express.Router();

    const repository = new UserRepository({ model: User });
    const service = new UserService({ repository });
    const controller = new UserController({ service });

    router.get('/', controller.getAllUsers.bind(controller));
    router.get('/:id', controller.getUserById.bind(controller));
    router.patch('/:id', controller.updateUserById.bind(controller));
    router.delete('/:id', controller.deleteUserById.bind(controller));

    return router;
  }
}
