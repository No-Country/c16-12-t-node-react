import { DataTypes } from 'sequelize';
import sequelize from '../config.js';
import { City } from './city.js';

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
  code: {
    type: DataTypes.CHAR(3),
    allowNull: false,
  },
});

Country.hasMany(City, { foreignKey: 'country_id', sourceKey: 'id' });
City.belongsTo(Country, { foreignKey: 'country_id', targetKey: 'id' });
