import { BaseService } from './base.service.js';

let _repository = null;

export class TripService extends BaseService {
  constructor({ repository }) {
    super({ repository });
    _repository = repository;
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
