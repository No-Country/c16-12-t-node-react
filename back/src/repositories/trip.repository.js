import { BaseRepository } from './base.repository.js';

export class TripRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
  }

  async getAllTrips() {
    return _repository.getAll();
  }

  async getTripById(req, res) {
    return _repository.getTripById(req, res);
  }
  async createTrip(req, res) {
    return _repository.createTrip(req, res);
  }

  async updateTrip(req, res) {
    return _repository.updateTrip(req, res);
  }
  async deleteTrip(req, res) {
    return _repository.deleteTrip(req, res);
  }
}
