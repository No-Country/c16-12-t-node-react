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
  sender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipient: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Chat.belongsTo(User, { foreignKey: 'sender', targetKey: 'id' });
Chat.belongsTo(User, { foreignKey: 'recipient', targetKey: 'id' });
