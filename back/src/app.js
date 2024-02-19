import { envs } from './config/index.js';
import { Server } from './server.js';
import { routes } from './routes.js';
import sequelize from './db/config.js';

(async () => {
  const route = routes();
  const server = new Server({ port: envs.PORT, router: route });
  try {
    await sequelize.authenticate();
    console.log('Connection has been establish');
  } catch (error) {
    console.error('Unable to connect to the database');
  }
  const port = await server.start();
  if (port) console.log(`Server running at http://localhost:${port}`);
})();
