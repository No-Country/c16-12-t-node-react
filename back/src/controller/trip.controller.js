import HandleError from '../errors/handle.error.js';

let _service = null;

/**
 * AuthController class
 *
 * @param {Object} - { service }
 * @returns {Object} - AuthController class
 *
 */
export class TripController {
  constructor({ service }) {
    _service = service;
  }

  // Fetch all trips
  getAllTrips = (req, res) => {
    Trip.findAll()
      .then((trips) => res.send(trips))
      .catch((error) => res.status(500).send({ message: error.message }));
  };

  // Fetch a single trip by id
  getTripById = (req, res) => {
    Trip.findByPk(req.params.id)
      .then((trip) => {
        if (trip) {
          res.send(trip);
        } else {
          res.status(404).send({ message: 'Trip not found' });
        }
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  };

  // Create a new trip
  createTrip = (req, res) => {
    Trip.create(req.body)
      .then((trip) => res.status(201).send(trip))
      .catch((error) => res.status(400).send({ message: error.message }));
  };

  // Update a trip
  updateTrip = (req, res) => {
    Trip.update(req.body, {
      where: { id: req.params.id },
    })
      .then((updated) => {
        if (updated[0] > 0) {
          res.send({ message: 'Trip updated successfully' });
        } else {
          res.status(404).send({ message: 'Trip not found' });
        }
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  };

  // Delete a trip
  deleteTrip = (req, res) => {
    Trip.destroy({
      where: { id: req.params.id },
    })
      .then((deleted) => {
        if (deleted) {
          res.send({ message: 'Trip deleted successfully' });
        }
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  };
}
