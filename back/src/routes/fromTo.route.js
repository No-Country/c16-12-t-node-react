import express from 'express';
import { FromToController } from '../controller/index.js'; // Asegúrate de que la ruta es correcta
import { FromToRepository } from '../repositories/index.js';
import { FromToService } from '../services/index.js';
import { From_to } from '../db/mysql/models/from_to.model.js';

export class FromToRoute {
    
    static routes() {
        const router = express.Router();

        const repository = new FromToRepository({ model: From_to });
        const service = new FromToService({ repository });
        const controller = new FromToController({ service });

        router.get('/', controller.getAllFromTo.bind(controller));
        router.get('/:id', controller.getFromToById.bind(controller));
        router.post('/', controller.createFromTo.bind(controller));
        router.patch('/:id', controller.updateFromTo.bind(controller));
        router.delete('/:id', controller.deleteFromTo.bind(controller));

        return router;
    }
}