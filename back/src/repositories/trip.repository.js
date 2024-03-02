import { Op } from 'sequelize';
import { sequelize } from '../db/mysql/config/config.connection.js';
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
    const query = `
        SELECT 
          t.id,
          t.distance,
          t.time_estimated,
          t.seats,
          t.seat_price,
          t.total_price,
          t.driver_id,
          t.trip_date,
          t.departure_time,
          t.pets_allowed,
          t.smoking_allowed,
          t.child_seat_available,
          t.trip_status,
          (SELECT SUM(seats_reserved)FROM SeatReserveds WHERE trip_id = t.id) AS seats_reserved,
          (SELECT
            JSON_OBJECT(
              'id', o.id,
              'name', o.name,
              'latitud', o.latitud,
              'longitud', o.longitud,
              'country', (SELECT JSON_OBJECT('id', co.id, 'name', co.name, 'code', co.code))
          )) AS origin,
          (SELECT
            JSON_OBJECT(
              'id', d.id,
              'name', d.name,
              'latitud', d.latitud,
              'longitud', d.longitud,
              'country_id', d.country_id,
              'country', (SELECT JSON_OBJECT('id', cd.id, 'name', cd.name, 'code', cd.code))
          )) AS destiny
        FROM 
            Trips t
        INNER JOIN 
            Cities AS o ON t.origin_id = o.id
        INNER JOIN 
            Cities AS d ON t.destiny_id = d.id
        INNER JOIN 
            Countries AS co ON o.country_id = co.id
        INNER JOIN 
            Countries AS cd ON d.country_id = cd.id
        LIMIT ${limit} OFFSET ${offset};
    `;

    try {
      const total = await this.tripModel.count();
      const nextPage =
        page * limit < total ? `${envs.BASE_API}/trips?page=${page + 1}&limit=${limit}` : null;
      const prevPage =
        page - 1 > 0 && limit - 1 < total
          ? `${envs.BASE_API}/properties?page=${page - 1}&limit=${limit}`
          : null;

      const trips = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });

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
    const query = `
      SELECT
        t.id,
        t.distance,
        t.time_estimated,
        t.seats,
        t.seat_price,
        t.total_price,
        t.trip_date,
        t.departure_time,
        t.pets_allowed,
        t.smoking_allowed,
        t.child_seat_available,
        t.driver_id,
        t.trip_status,
        (SELECT SUM(seats_reserved)FROM SeatReserveds WHERE trip_id = t.id) AS seats_reserved,
        (SELECT
            JSON_OBJECT(
                'id', o.id,
                'name', o.name,
                'zip_code', o.zip_code,
                'latitud', o.latitud,
                'longitud', o.longitud,
                'country', JSON_OBJECT('id', co.id, 'code', co.code, 'name', co.name)
            )
        ) AS origin,
        (SELECT
            JSON_OBJECT(
                'id', d.id,
                'name', d.name,
                'zip_code', d.zip_code,
                'latitud', d.latitud,
                'longitud', d.longitud,
                'country', JSON_OBJECT('id', cd.id, 'code', cd.code, 'name', cd.name)
            )
        ) AS destiny,
        (SELECT
            JSON_OBJECT(
                'id', u.id,
                'name', u.name,
                'email', u.email,
                'phone', u.phone
            )
        ) AS driver,
        COALESCE(
            (
                SELECT
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', sr.id,
                            'seats', sr.seats_reserved,
                            'status', sr.reserved_status,
                            'user', JSON_OBJECT('id', u.id, 'name', u.name, 'email', u.email, 'phone', u.phone)
                        )
                    )
                FROM SeatReserveds AS sr
                WHERE sr.trip_id = t.id
            ),
            JSON_ARRAY()
        ) AS passengers
      FROM
          Trips t
      JOIN
          Cities AS o ON t.origin_id = o.id
      JOIN
          Cities AS d ON t.destiny_id = d.id
      JOIN
          Countries AS co ON o.country_id = co.id
      JOIN
          Countries AS cd ON d.country_id = cd.id
      JOIN
          Users AS u ON t.driver_id = u.id
      WHERE
        t.id = ${id};
    `;

    await this.findOne({ id });

    try {
      const trip = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
      return trip.at(0);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async createTrip(tripData) {
    const [origin, destiny] = await Promise.all([
      this.cityModel.findOne({ where: { id: tripData.origin } }),
      this.cityModel.findOne({ where: { id: tripData.destiny } }),
    ]);

    if (!origin) {
      throw CustomeError.badRequest(`Origin city with id '${tripData.origin}' not found`);
    }

    if (!destiny) {
      throw CustomeError.badRequest(`Destiny city with id '${tripData.destiny}' not found`);
    }

    try {
      return await this.tripModel.create(tripData);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async updateTrip(id, data) {
    await this.findOne({ id });

    let tripUpdated;
    const response = await this.tripModel.update(data, { where: { id } });
    if (response.at(0) === 1) {
      tripUpdated = await this.getTripById(id);
    } else {
      throw CustomeError.notAcceptable('Trip not updated');
    }
    return tripUpdated;
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
    const { trip_id } = data;
    await this.findOne({ id: trip_id });

    try {
      return await this.ReservationModel.create(data);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async cancelTrip(id) {
    const reservation = await this.ReservationModel.findOne({ where: { id } });
    if (!reservation) {
      throw CustomeError.notAcceptable(`${this.ReservationModel.name} with id '${id}' not found`);
    }

    try {
      const response = await this.ReservationModel.update(
        { reserved_status: 'cancelled' },
        { where: { id } },
      );

      if (response.at(0) > 0) {
        return this.ReservationModel.findOne({ where: { id } });
      } else {
        throw CustomeError.notAcceptable(
          `${this.ReservationModel.name} with id '${id}' was not updated`,
        );
      }
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  // utils
  async findOne(query) {
    let trip;
    try {
      trip = await this.tripModel.findOne({ where: query });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }

    const res = Object.values(query);
    if (!trip) throw CustomeError.notFound(`${this.tripModel.name} with '${res}' not found`);

    return trip;
  }
}
