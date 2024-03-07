import { CreateTripDto } from '../domain/dtos/trip/create-trip.dto.js';
import { UpdateTripDto } from '../domain/dtos/trip/update-trip.dto.js';
import { HandleError } from '../errors/index.js';

export class TripController {
  constructor({ service }) {
    this.service = service;
  }

  // Fetch all trips
  getAllTrips = (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    return this.service
      .getAllTrips({ page: Number(page), limit: Number(limit) })
      .then((users) => res.status(200).json(users))
      .catch((err) => HandleError.handle(err, res));
  };

  // Fetch a single trip by id
  getTripById = (req, res) => {
    const { id } = req.params;
    return this.service
      .getTripById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => HandleError.handle(err, res));
  };

  // Create a new trip
  createTrip = (req, res) => {
    const { user } = req.body;
    const [error, createTripDto] = CreateTripDto.create({ user, ...req.body });
    if (error) return HandleError.handle(error, res);

    return this.service
      .createTrip(createTripDto)
      .then((trip) => res.status(201).json(trip))
      .catch((error) => HandleError.handle(error, res));
  };

  // Update a trip
  updateTrip = (req, res) => {
    const { id } = req.params;
    const [error, updateTripDto] = UpdateTripDto.create({ id, ...req.body });
    if (error) return HandleError.handle(error, res);

    return this.service
      .updateTrip(updateTripDto)
      .then((trip) => res.status(201).json(trip))
      .catch((error) => HandleError.handle(error, res));
  };

  // Delete a trip
  deleteTrip = (req, res) => {
    const { id } = req.params;
    return this.service
      .deleteTrip(id)
      .then((trip) => res.status(200).json(trip))
      .catch((error) => HandleError.handle(error, res));
  };

  reserveTrip = (req, res) => {
    const { tripId } = req.params;
    return this.service
      .reserveTrip({ tripId, ...req.body })
      .then((trip) => res.status(201).json(trip))
      .catch((error) => HandleError.handle(error, res));
  };

  cancelTrip = (req, res) => {
    const { reservedId } = req.params;
    return this.service
      .cancelTrip(reservedId)
      .then((trip) => res.status(201).json(trip))
      .catch((error) => HandleError.handle(error, res));
  };

  getTripsByUser = (req, res) => {
    const { userId } = req.params;

    return this.service
      .getTripsByUser(userId)
      .then((trip) => res.status(200).json(trip))
      .catch((error) => HandleError.handle(error, res));
  };
}
