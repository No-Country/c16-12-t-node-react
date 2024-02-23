import { HandleError } from '../errors/index.js';

export class TripController {
  constructor({ service }) {
    this.service = service;
  }

  // Fetch all trips
  getAllTrips = (req, res) => {
    return this.service
      .getAllTrips()
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
    return this.service
      .createTrip(req.body)
      .then((trip) => res.status(201).send(trip))
      .catch((error) => res.status(400).send({ message: error.message }));
  };

  // Update a trip
  updateTrip = (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: 'Missing trip id' });
    }

    return this.service
      .updateTrip(id, req.body)
      .then((trip) => res.status(201).send(trip))
      .catch((error) => res.status(400).send({ message: error.message }));
  };

  // Delete a trip
  deleteTrip = (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: 'Missing trip id' });
    }

    return this.service
      .deleteTrip(id)
      .then((trip) => res.status(201).send(trip))
      .catch((error) => res.status(500).send({ message: error.message }));
  };
}
