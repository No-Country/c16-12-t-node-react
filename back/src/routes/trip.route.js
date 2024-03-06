import express from 'express';
import { TripController } from '../controller/index.js'; // Asegúrate de que la ruta es correcta
import { TripRepository } from '../repositories/index.js';
import { TripService } from '../services/index.js';
import { City, SeatReserved, Trip, User } from '../db/mysql/models/index.js';
import { AuthMiddleware } from '../middleware/auth.middleware.js';

export class TripRoute {
  static routes() {
    const router = express.Router();

    const repository = new TripRepository({
      tripModel: Trip,
      cityModel: City,
      ReservationModel: SeatReserved,
      UserModel: User,
    });
    const service = new TripService({ repository });
    const controller = new TripController({ service });

    router.get('/', controller.getAllTrips.bind(controller));
    router.get('/:id', controller.getTripById.bind(controller));
    router.post('/', [AuthMiddleware.authentication], controller.createTrip.bind(controller));
    router.patch('/:id', [AuthMiddleware.authentication], controller.updateTrip.bind(controller));
    router.delete('/:id', [AuthMiddleware.authentication], controller.deleteTrip.bind(controller));

    router.post(
      '/:tripId/reserve',
      [AuthMiddleware.authentication],
      controller.reserveTrip.bind(controller),
    );
    router.patch(
      '/:reservedId/cancel',
      [AuthMiddleware.authentication],
      controller.cancelTrip.bind(controller),
    );

    router.get(
      '/:userId/my-trips',
      [AuthMiddleware.authentication],
      controller.getTripsByUser.bind(controller),
    );

    return router;
  }
}
