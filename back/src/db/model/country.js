import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

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
  id_country: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  latitud: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitud: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
