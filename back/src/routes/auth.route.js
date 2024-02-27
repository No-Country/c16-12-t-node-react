import express from 'express';

import { AuthController } from '../controller/index.js';
import { UserRepository } from '../repositories/index.js';
import { AuthService } from '../services/index.js';
import { envs } from '../config/index.js';
import { User, City, Role } from '../db/mysql/models/index.js';

export class AuthRoute {
  static routes() {
    const router = express.Router();

    const repository = new UserRepository({ userModel: User, cityModel: City, roleModel: Role });
    const service = new AuthService({ repository, jwt_secret: envs.JWT_SECRET });
    const controller = new AuthController({ service });

    router.get('/login', controller.login.bind(controller));
    router.post('/register', controller.register.bind(controller));

    return router;
  }
}
