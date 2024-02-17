import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';
import { Trip } from './trip.model.js';

export const Driver_Passenger = sequelize.define('Driver_Passenger', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  passenger_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  driver_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Driver_Passenger.belongsTo(Trip, { foreignKey: 'trip_id', targetKey: 'id' });
