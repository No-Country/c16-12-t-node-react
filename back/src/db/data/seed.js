import { sequelize } from '../mysql/config/config.connection.js';
import { City, Country, Role, SeatReserved, Trip, User } from '../mysql/models/index.js';
import { seedData } from './data.js';

(async () => {
  await sequelize.sync({ force: true });

  await main();

  await sequelize.close();
})();

async function main() {
  // todo 2: create roles
  await Role.bulkCreate(seedData.roles);

  // todo 3: create countries
  await Country.bulkCreate(seedData.countries);

  // todo 4: create cities
  await City.bulkCreate(seedData.cities.colombia);
  await City.bulkCreate(seedData.cities.peru);
  await City.bulkCreate(seedData.cities.venezuela);
  await City.bulkCreate(seedData.cities.ecuador);
  await City.bulkCreate(seedData.cities.brasil);
  await City.bulkCreate(seedData.cities.paraguay);
  await City.bulkCreate(seedData.cities.chile);
  await City.bulkCreate(seedData.cities.uruguay);
  await City.bulkCreate(seedData.cities.argentina);

  // todo 6: create users
  await User.bulkCreate(seedData.users);

  // todo 7: create trips
  await Trip.bulkCreate(seedData.trips);

  // todo 8: create reservations
  await SeatReserved.bulkCreate(seedData.reservations);
}
