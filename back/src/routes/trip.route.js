import express from 'express';

import { TripController } from '../controller/index.js';
import { TripRepository } from '../repositories/index.js';
import { TripService } from '../services/index.js';

export class TripRoute {
  routes() {
    const router = express.Router();

    const repository = new TripRepository({ model: null });
    const service = new TripService({ repository });
    const controller = new TripController({ service });

    router.get('/trips', controller.getAllTrips.bind(controller));
    router.get('/:id', controller.getTripById.bind(controller));
    router.post('/', controller.createTrip.bind(controller));
    router.patch('/:id', controller.updateTrip.bind(controller));
    router.delete('/:id', controller.deleteTrip.bind(controller));

    return router;
  }
}
