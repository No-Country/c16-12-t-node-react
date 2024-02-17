import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

export const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
});
