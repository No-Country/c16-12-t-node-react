import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';

export const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.CHAR(3),
    allowNull: false,
  },
});
