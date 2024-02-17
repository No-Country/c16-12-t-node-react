import { envs } from './config/index.js';
import { Server } from './server.js';
import { routes } from './routes.js';
import sequelize from './db/config.js';

import '../src/db/model/country.js';
import '../src/db/model/city.js';

(async () => {
  const route = routes();
  const server = new Server({ port: envs.PORT, router: route });
  try {
    await sequelize.sync({ force: false });
    console.log('Conexion establedica con la bd');
  } catch (error) {
    console.error('No se puede estableces la conexion con la bd');
  }
  const port = await server.start();
  if (port) console.log(`Server running at http://localhost:${port}`);
})();
