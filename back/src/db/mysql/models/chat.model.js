import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.connection.js';
import { User } from './user.model.js';

export const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passenger_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  driver_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Chat.belongsTo(User, { through: 'Driver_Passenger', foreignKey: 'passenger_id', targetKey: 'id' });
Chat.belongsTo(User, { through: 'Driver_Passenger', foreignKey: 'driver_id', targetKey: 'id' });
