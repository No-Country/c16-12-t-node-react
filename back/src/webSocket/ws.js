import { JwtAdapter } from '../config/adapters/jwt.adapter.js';
import { envs } from '../config/index.js';
import { Chat } from '../db/mysql/models/index.js';

export const webSocketServer = (wss) => {
  wss.on('connection', (connection, request) => {
    console.log('Client connected');

    function notifyAboutOnlinePeople() {
      [...wss.clients].forEach((client) => {
        client.send(
          JSON.stringify({
            online: [...wss.clients].map((cliente) => {
              return {
                id: cliente.id,
                username: cliente.username,
                email: cliente.email,
                rating: cliente.rating,
                avatar: client.avatar,
                city_id: client.city_id,
                role: client.role,
              };
            }),
          }),
        );
      });
    }

    connection.isAlive = true;
    connection.timer = setInterval(() => {
      connection.ping();
      connection.deathTimer = setTimeout(() => {
        connection.isAlive = false;
        clearInterval(connection.timer);
        connection.terminate();
        console.log('Client disconnected');
      }, 1000);
    }, 5000);

    connection.on('pong', () => {
      clearTimeout(connection.deathTimer);
    });

    const token = request.headers['sec-websocket-protocol'];

    JwtAdapter.verifytoken(token, envs.JWT_SECRET).then((payload) => {
      if (!payload) return;

      connection.id = payload.id;
      connection.username = `${payload.name} ${payload.last_name}`;
      connection.email = payload.email;
      connection.role = payload.role;
      connection.rating = payload.rating;
      connection.avatar = payload.avatar;
      connection.city_id = payload.city_id;
    });

    connection.on('message', async (msg) => {
      const { recipient, message } = JSON.parse(msg);

      if (recipient && message) {
        const data = {
          message,
          sender: connection.id,
          recipient,
        };

        const messageData = await Chat.create(data);

        [...wss.clients]
          .filter((client) => client.id === recipient)
          .forEach((client) => {
            client.send(
              JSON.stringify({
                id: messageData.dataValues.id,
                sender: connection.id,
                recipient,
                message,
              }),
            );
          });
      }
    });
    notifyAboutOnlinePeople();
  });
};
