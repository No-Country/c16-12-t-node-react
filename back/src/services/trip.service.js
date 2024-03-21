import { CustomeError } from '../errors/index.js';
import { Validator } from '../helpers/validator.helper.js';

export class TripService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllTrips(pagination) {
    return await this.repository.getAllTrips(pagination);
  }

  async getTripById(id) {
    this.validateId(id);
    const trip = await this.repository.getTripById(id);
    if (!trip) throw CustomeError.notFound(`Trip with id '${id}' not found`);

    return trip;
  }

  async createTrip(tripData) {
    const distance = Math.random() * 100;
    const time_estimated = (Math.random() * 10).toFixed(2);

    return await this.repository.createTrip({
      ...tripData,
      distance,
      time_estimated,
      origin_id: tripData.origin,
      destiny_id: tripData.destiny,
      passenger_id: tripData.passenger,
      driver_id: tripData.driver,
    });
  }

  async updateTrip(updateTripDto) {
    const { id, ...tripData } = updateTripDto;
    const updateData = {
      ...tripData,
      driver_id: tripData.driver,
    };
    return await this.repository.updateTrip(id, updateData);
  }

  async deleteTrip(id) {
    this.validateId(id);
    return await this.repository.delete(id);
  }

  async getReservationsByUser(userId) {
    const result = await this.repository.getReservationsByUser(userId);
    return result;
  }

  async reserveTrip(data) {
    const reserve = {
      seats_reserved: data.seats_reserved,
      trip_id: data.tripId,
      user_id: data.user.id,
    };

    const seatReserved = await this.repository.reserveTrip(reserve);

    const trip = await this.repository.getById(data.tripId);

    return {
      trip,
      seatReserved,
    };
  }

  async getTripsByUser(userId) {
    const result = await this.repository.getTripsByUser(userId);
    return result;
  }

  async cancelTrip(id) {
    this.validateId(id);
    return await this.repository.cancelTrip(id);
  }

  validateId(id) {
    if (!Validator.validateId(id))
      throw CustomeError.badRequest(`Trip id '${id}' must be a number`);
  }
}
