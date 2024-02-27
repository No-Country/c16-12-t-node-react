import { DataTypes } from 'sequelize';

import { sequelize } from '../config/config.connection.js';
import { User } from './user.model.js';

export const Rating = sequelize.define('Rating', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 1,
      max: 5,
    },
  },
  rated_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Rating.belongsTo(User, { foreignKey: 'rated_user_id', targetKey: 'id' });
Rating.belongsTo(User, { foreignKey: 'rating_user_id', targetKey: 'id' });
