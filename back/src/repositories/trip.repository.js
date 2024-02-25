import { Op } from 'sequelize';
import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';
import { envs } from '../config/index.js';

export class TripRepository extends BaseRepository {
  constructor({ tripModel, cityModel, UserModel, ReservationModel }) {
    super({ model: tripModel });
    this.tripModel = tripModel;
    this.cityModel = cityModel;
    this.UserModel = UserModel;
    this.ReservationModel = ReservationModel;
  }

  async getAllTrips({ page, limit }) {
    const offset = (page - 1) * limit;

    try {
      const [total, trips] = await Promise.all([
        this.tripModel.count(),
        this.tripModel.findAll({ offset, limit }),
      ]);

      for (let i = 0; i < trips.length; i++) {
        const [origin, destiny] = await this.getCitys(trips[i].origin_id, trips[i].destiny_id);
        trips[i].dataValues.origin = origin.id === trips[i].origin_id ? origin : destiny;
        trips[i].dataValues.destiny = destiny.id === trips[i].destiny_id ? destiny : origin;
        delete trips[i]?.dataValues.origin_id;
        delete trips[i]?.dataValues.destiny_id;
      }

      const nextPage =
        page * limit < total ? `${envs.BASE_API}/trips?page=${page + 1}&limit=${limit}` : null;
      const prevPage =
        page - 1 > 0 && limit - 1 < total
          ? `${envs.BASE_API}/properties?page=${page - 1}&limit=${limit}`
          : null;

      return {
        page,
        limit,
        total,
        nextPage,
        prevPage,
        data: trips,
      };
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getTripById(id) {
    try {
      const passengers = await this.ReservationModel.findAll({
        where: { trip_id: id },
        attributes: ['id', 'user_id', 'seats_reserved', 'reserved_status'],
      });

      for (let i = 0; i < passengers.length; i++) {
        const user = await this.UserModel.findOne({
          where: { id: passengers[i]?.user_id },
          attributes: ['id', 'name', 'email', 'phone', 'dni', 'address', 'role', 'avatar'],
        });
        passengers[i].dataValues.user = user;
        delete passengers[i]?.dataValues.user_id;
      }

      const trip = await this.tripModel.findOne({
        where: { id: id },
      });

      if (!trip) return null;

      const [origin, destiny] = await this.getCitys(trip.origin_id, trip.destiny_id);

      delete trip?.dataValues.origin_id;
      delete trip?.dataValues.destiny_id;

      return {
        ...trip.dataValues,
        origin,
        destiny,
        passengers: [...passengers],
      };
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async createTrip(tripData) {
    try {
      return await this.tripModel.create(tripData);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getCitys(origin, destiny) {
    try {
      return await this.cityModel.findAll({
        where: {
          [Op.or]: [{ id: +origin }, { id: +destiny }],
        },
      });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async reserveTrip(data) {
    try {
      return await this.ReservationModel.create(data);
    } catch (error) {
      console.log(error);
      throw CustomeError.serverError(`${error}`);
    }
  }

  async cancelTrip(id) {
    try {
      return await this.ReservationModel.update(
        { reserved_status: 'cancelled' },
        { where: { id } },
      );
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
