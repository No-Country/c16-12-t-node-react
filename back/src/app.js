import { envs } from './config/index.js';
import { Server } from './server.js';
import { routes } from './routes.js';
import { sequelize } from './db/mysql/config/config.connection.js';

import './db/mysql/models/index.js';

(async () => {
  const { BASE_API, PORT } = envs;
  try {
    await sequelize.sync({ alter: false });
    console.log('Connected to DB successfully');

    const route = routes(BASE_API);
    const server = new Server({ port: PORT, router: route });
    const port = await server.start();
    if (port) {
      console.log(`Server running on port ${port}`);
    }
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
})();
