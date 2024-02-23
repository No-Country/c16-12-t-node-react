import express from 'express';
import { TripController } from '../controller/index.js'; // Asegúrate de que la ruta es correcta
import { TripRepository } from '../repositories/index.js';
import { TripService } from '../services/index.js';
import { Trip } from '../db/mysql/models/trip.model.js';

export class TripRoute {
  routes() {
    const router = express.Router();

    const repository = new TripRepository({ model: Trip });
    const service = new TripService({ repository });
    const controller = new TripController({ service });

    router.get('/trips', controller.getAllTrips.bind(controller));
    router.get('/trips/:id', controller.getTripById.bind(controller));
    router.post('/trips', controller.createTrip.bind(controller));
    router.patch('/trips/:id', controller.updateTrip.bind(controller));
    router.delete('/trips/:id', controller.deleteTrip.bind(controller));

    return router;
  }
}
