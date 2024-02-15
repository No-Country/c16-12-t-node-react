import { envs } from './config/index.js';
import { Server } from './server.js';
import { routes } from './routes.js';

(async () => {
  const route = routes();
  const server = new Server({ port: envs.PORT, router: route });
  const port = await server.start();
  if (port) console.log(`Server running at http://localhost:${port}`);
})();
