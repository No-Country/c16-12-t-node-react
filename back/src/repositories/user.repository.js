import { sequelize } from '../db/mysql/config/config.connection.js';

import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository {
  constructor({ userModel, roleModel, cityModel }) {
    super({ model: userModel });
    this.userModel = userModel;
    this.roleModel = roleModel;
    this.cityModel = cityModel;
  }

  async getAllUsers() {
    const query = `
        SELECT
          u.id,
          u.name,
          u.last_name,
          u.email,
          u.phone,
          u.dni,
          u.address,
          u.avatar,
          COALESCE(AVG(ra.rating), 0) AS rating,
          u.information,
          JSON_OBJECT('id', r.id, 'name', r.name) AS role,
          JSON_OBJECT('id', c.id, 'name', c.name) AS city,
          JSON_OBJECT('id', co.id, 'name', co.name) AS country
        FROM 
            Users u
        LEFT JOIN 
            Roles r ON u.role = r.id
        INNER JOIN 
            Cities c ON u.city_id = c.id
        INNER JOIN 
            Countries co ON c.country_id = co.id
        LEFT JOIN 
            Ratings ra ON ra.rated_user_id = u.id
        GROUP BY
          u.id, u.name, u.last_name, u.email, u.phone, u.dni, u.address, u.avatar, u.information, r.id, r.name, c.id, c.name, co.id, co.name;
      `;

    try {
      return await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getUserById(id) {
    const query = `
        SELECT 
          u.id,
          u.name,
          u.last_name,
          u.email,
          u.phone,
          u.dni,
          u.address,
          u.avatar,
          u.password,
          COALESCE(AVG(ra.rating), 0) AS rating,
          u.information,
          (SELECT JSON_OBJECT('id', r.id, 'name', r.name)) AS role,
          (SELECT JSON_OBJECT('id', c.id, 'name', c.name)) AS city,
          (SELECT JSON_OBJECT('id', co.id, 'name', co.name)) AS country
        FROM Users u
        INNER JOIN Roles r
          ON u.role = r.id
        INNER JOIN Cities c
          ON u.city_id = c.id
        INNER JOIN Countries co
          ON c.country_id = co.id
        LEFT JOIN Ratings ra
          ON ra.rated_user_id = u.id
        WHERE u.id = ${id};
      `;

    await this.findOne({ id });

    try {
      const user = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
      return user.at(0);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async createUser(data) {
    const { city_id, role } = data;

    const userData = {
      ...data,
      city_id: +city_id,
      role: +role,
    };

    const roleExists = await this.roleModel.findOne({ where: { id: role } });
    if (!roleExists) throw CustomeError.notFound(`Role with id '${role}' not found`);

    const cityExists = await this.cityModel.findOne({ where: { id: city_id } });
    if (!cityExists) throw CustomeError.notFound(`City with id '${city_id}' not found`);

    try {
      const user = await this.userModel.create(userData);
      return await this.getUserById(user.id);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async updateUser(id, data) {
    const query = `
      SELECT 
        u.id,
        u.name,
        u.last_name,
        u.email,
        u.phone,
        u.dni,
        u.address,
        u.avatar,
        COALESCE(AVG(ra.rating), 0) AS rating,
        u.information,
        (SELECT JSON_OBJECT('id', r.id, 'name', r.name)) AS role,
        (SELECT JSON_OBJECT('id', c.id, 'name', c.name)) AS city,
        (SELECT JSON_OBJECT('id', co.id, 'name', co.name)) AS country
      FROM Users u
      INNER JOIN Roles r
        ON u.role = r.id
      INNER JOIN Cities c
        ON u.city_id = c.id
      INNER JOIN Countries co
        ON c.country_id = co.id
      LEFT JOIN Ratings ra
        ON ra.rated_user_id = u.id
      WHERE u.id = ${id};
      `;

    await this.findOne({ id });

    let userUpdated;
    try {
      const response = await this.userModel.update(
        { ...data, password: data.passWordHashed },
        { where: { id } },
      );

      if (response.at(0) === 1) {
        userUpdated = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
      } else {
        throw CustomeError.notAcceptable('User not updated');
      }

      return userUpdated.at(0);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async updateUserRating(userId, rating) {
    try {
      await this.userModel.update(rating, { where: { id: userId } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async deleteUser(id) {
    await this.findOne({ id });
    try {
      const user = await this.userModel.destroy({ where: { id } });
      if (user) return true;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getUserByEmail(email) {
    try {
      return await this.userModel.findOne({ where: { email } });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async findOne(query) {
    let entity;
    try {
      entity = await this.userModel.findOne({ where: query });
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }

    const res = Object.values(query);
    if (!entity) throw CustomeError.notFound(`${this.userModel.name} with '${res}' not found`);

    return entity;
  }
}
