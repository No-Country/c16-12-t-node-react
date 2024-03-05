import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';
import { Trip, User } from './index.js';

export const SeatReserved = sequelize.define('SeatReserved', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seats_reserved: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trip_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reserved_status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'reserved',
    validate: {
      isIn: [['reserved', 'cancelled']],
    },
  },
});

SeatReserved.belongsTo(Trip, {
  foreignKey: 'trip_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
SeatReserved.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
