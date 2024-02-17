import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nocountry', 'root', 'Pass@1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
