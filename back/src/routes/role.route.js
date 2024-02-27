import express from 'express';

import { Role } from '../db/mysql/models/index.js';
import { AuthMiddleware } from '../middleware/auth.middleware.js';
import { RoleController } from '../controller/index.js';
import { RoleService } from '../services/role.service.js';
import { RoleRepository } from '../repositories/role.repository.js';

export class RoleRoute {
  static routes() {
    const router = express.Router();

    const repository = new RoleRepository({ Role });
    const service = new RoleService({ repository });
    const controller = new RoleController({ service });

    router.get('/', controller.getAllRoles.bind(controller));
    router.post('/', controller.CreateRole.bind(controller));
    router.patch('/:id', controller.UpdateRole.bind(controller));
    router.delete('/:id', controller.DeleteRole.bind(controller));

    return router;
  }
}
