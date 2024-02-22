import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';
import { City } from './city.model.js';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'No address',
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'No avatar',
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'passenger',
    validate: {
      isIn: [['driver', 'passenger', 'admin']],
    },
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5,
    },
  },
  information: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'No information',
  },
});

User.belongsTo(City, { foreignKey: 'city_id', targetKey: 'id' });
