import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';
import { Trip } from './trip.model.js';

export const From_to = sequelize.define('From_to', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destiny_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

From_to.belongsTo(Trip, { foreignKey: 'trip_id', targetKey: 'id' });
