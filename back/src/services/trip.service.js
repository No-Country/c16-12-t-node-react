import { CustomeError } from '../errors/index.js';
import { Validator } from '../helpers/validator.helper.js';

export class TripService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllTrips(pagination) {
    console.log(pagination);
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
      seats_reserved: tripData.seatsReserved,
      seat_price: tripData.seatPrice,
      total_price: tripData.totalPrice,
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
      seats_reserved: tripData.seatsReserved,
      seat_price: tripData.seatPrice,
      total_price: tripData.totalPrice,
      origin_id: tripData.origin,
      destiny_id: tripData.destiny,
      driver_id: tripData.driver,
      trip_status: tripData.tripStatus,
    };
    return await this.repository.update(id, updateData);
  }

  async deleteTrip(id) {
    this.validateId(id);
    return await this.repository.delete(id);
  }

  async reserveTrip(data) {
    const reserve = {
      seats_reserved: data.seats,
      trip_id: data.tripId,
      user_id: data.user.id,
    };
    const seatReserved = await this.repository.reserveTrip(reserve);

    const trip = await this.repository.getById(data.tripId);
    console.log(trip);

    return {
      trip,
      seatReserved,
    };
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
