import { sequelize } from '../mysql/config/config.connection.js';

(async () => {
  await sequelize.authenticate();

  await main();

  await sequelize.close();
})();

async function main() {
  // todo 1: delete data from all tables
  await Promise.all([
    sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
    sequelize.query('TRUNCATE TABLE `chat`'),
    sequelize.query('TRUNCATE TABLE `city`'),
    sequelize.query('TRUNCATE TABLE `country`'),
    sequelize.query('TRUNCATE TABLE `reservation`'),
    sequelize.query('TRUNCATE TABLE `role`'),
    sequelize.query('TRUNCATE TABLE `trip`'),
    sequelize.query('TRUNCATE TABLE `user`'),
    sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),
  ]);
  // todo 2: create countries
  // todo 3: create cities
  // todo 4: create roles
  // todo 5: create users
  // todo 6: create trips
  // todo 7: create reservations
}
