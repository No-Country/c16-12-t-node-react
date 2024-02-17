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
  seats_reserved: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seat_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Trip.belongsTo(City, { through: 'From_to', foreignKey: 'origin_id', targetKey: 'id' });
Trip.belongsTo(City, { through: 'From_to', foreignKey: 'destiny_id', targetKey: 'id' });
Trip.belongsTo(User, { through: 'Driver_Passenger', foreignKey: 'passenger_id', targetKey: 'id' });
Trip.belongsTo(User, { through: 'Driver_Passenger', foreignKey: 'driver_id', targetKey: 'id' });
