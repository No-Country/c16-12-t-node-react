import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';
import { City } from './city.model.js';
import { User } from './user.model.js';

export const Trip = sequelize.define('Trip', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  time_estimated: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seat_price: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
  driver_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trip_status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'not_started',
    validate: {
      isIn: [['not_started', 'in_progress', 'completed']],
    },
  },
});

Trip.belongsTo(City, { foreignKey: 'origin_id', targetKey: 'id' });
Trip.belongsTo(City, { foreignKey: 'destiny_id', targetKey: 'id' });
Trip.belongsTo(User, {
  foreignKey: 'driver_id',
  targetKey: 'id',
  allowNull: false,
});
