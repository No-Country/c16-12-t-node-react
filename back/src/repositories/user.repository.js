import { sequelize } from '../db/mysql/config/config.connection.js';

import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';

export class UserRepository extends BaseRepository {
  constructor({ userModel, roleModel }) {
    super({ model: userModel });
    this.user = userModel;
    this.roleModel = roleModel;
  }

  async getAllUsers() {
    try {
      return await sequelize.query(
        `
        SELECT u.id, u.name, u.last_name, u.email, u.phone, u.dni, u.address, u.avatar, r.name AS role, u.rating, c.name AS city, co.name AS country, u.information
        FROM Users u
        INNER JOIN Roles r
          ON u.role = r.id
        INNER JOIN Cities c
          ON u.city_id = c.id
        INNER JOIN Countries co
          ON c.country_id = co.id
      `,
        {
          type: sequelize.QueryTypes.SELECT,
        },
      );
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async getUserById(id) {
    try {
      return await sequelize.query(
        `
        SELECT u.id, u.name, u.last_name, u.email, u.phone, u.dni, u.address, u.avatar, r.name AS role, u.rating, c.name AS city, co.name AS country, u.information
        FROM Users u
        INNER JOIN Roles r
          ON u.role = r.id
        INNER JOIN Cities c
          ON u.city_id = c.id
        INNER JOIN Countries co
          ON c.country_id = co.id
        WHERE u.id = ${id}
      `,
        {
          type: sequelize.QueryTypes.SELECT,
        },
      );
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async updateUser(id, data) {
    await this.findOne({ id });

    let userUpdated;
    try {
      const response = await this.user.update(
        { ...data, city_id: data.cityId, password: data.passWordHashed },
        { where: { id } },
      );

      if (response.at(0) === 1) {
        userUpdated = await sequelize.query(
          `SELECT u.id, u.name, u.last_name, u.email, u.phone, u.dni, u.address, u.avatar, r.name AS role, u.rating, c.name AS city, co.name AS country, u.information
          FROM Users u
          INNER JOIN Roles r
            ON u.role = r.id
          INNER JOIN Cities c
            ON u.city_id = c.id
          INNER JOIN Countries co
            ON c.country_id = co.id
          WHERE u.id = ${id}`,
          {
            type: sequelize.QueryTypes.SELECT,
          },
        );
      } else {
        throw CustomeError.notAcceptable('User not updated');
      }

      return userUpdated.at(0);
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
      entity = await this.user.findOne({ where: query });
    } catch (error) {
      console.log(`${error}`);
      throw CustomeError.serverError(`${error}`);
    }
    const res = Object.values(query);
    if (!entity) throw CustomeError.notFound(`${this.user.name} with '${res}' not found`);
    return entity;
  }

  async findUserByEmail(email) {
    try {
      return await sequelize.query(
        `
        SELECT u.id, u.name, u.last_name, u.email, u.phone, u.dni, u.address, u.avatar, r.name AS role, c.name AS city, u.rating, u.information, u.password
        FROM Users u
        INNER JOIN Roles r
          ON u.role = r.id
        INNER JOIN Cities c
          ON u.city_id = c.id
        WHERE email = '${email}'
        `,
        {
          type: sequelize.QueryTypes.SELECT,
        },
      );
    } catch (error) {
      console.log(`${error}`);
      CustomeError.serverError(`${error}`);
    }
  }
}
