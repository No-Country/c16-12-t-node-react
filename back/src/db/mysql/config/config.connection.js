import { Sequelize } from 'sequelize';
import { envs } from '../../../config/index.js';

export const sequelize = new Sequelize(envs.BD_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
  host: envs.DB_HOST,
  dialect: envs.DB_DIALECT_MYSQL,
});
