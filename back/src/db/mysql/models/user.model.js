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
  last_name: {
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
    defaultValue: '',
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 2,
    validate: {
      isIn: [[1, 2, 3]],
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
  city_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.belongsTo(City, { foreignKey: 'city_id', targetKey: 'id' });
