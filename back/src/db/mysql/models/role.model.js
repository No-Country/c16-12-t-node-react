import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';

export const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Passenger',
    validate: {
      isIn: [['Passenger', 'Driver', 'Admin']],
    },
  },
});
