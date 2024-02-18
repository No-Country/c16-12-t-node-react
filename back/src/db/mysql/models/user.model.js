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
    allowNull: false,
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
  information: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'No information',
  },
});

User.belongsTo(City, { foreignKey: 'city_id', targetKey: 'id' });
