import express from 'express';

import { AuthController } from '../controller/index.js';
import { UserRepository } from '../repositories/index.js';
import { AuthService } from '../services/index.js';

export class AuthRoute {
  routes() {
    const router = express.Router();

    const repository = new UserRepository({ model: null });
    const service = new AuthService({ repository });
    const controller = new AuthController({ service });

    router.get('/login', controller.login.bind(controller));
    router.get('/register', controller.register.bind(controller));

    return router;
  }
}
