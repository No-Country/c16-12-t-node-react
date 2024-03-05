import express from 'express';
import { WebSocketServer } from 'ws';

import { envs } from './config/index.js';
import { routes } from './routes.js';
import { sequelize } from './db/mysql/config/config.connection.js';

import './db/mysql/models/index.js';
import { webSocketServer } from './webSocket/ws.js';

(async () => {
  try {
    await sequelize.sync({ alter: false });
    await main();
  } catch (error) {
    console.log(error);
  }
})();

async function main() {
  const { BASE_API, PORT } = envs;

  const app = express();
  app.use(routes(BASE_API));

  const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });

  const wsServer = new WebSocketServer({ server });
  webSocketServer(wsServer);
}
