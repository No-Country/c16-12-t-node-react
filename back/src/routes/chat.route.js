import express from 'express';

import { AuthMiddleware } from '../middleware/index.js';
import { ChatController } from '../controller/index.js';
import { ChatService } from '../services/chat.service.js';
import { ChatRepository } from '../repositories/chat.respository.js';
import { Chat } from '../db/mysql/models/chat.model.js';

export class ChatRoute {
  static routes() {
    const router = express.Router();

    const repository = new ChatRepository({ chatModel: Chat });
    const service = new ChatService({ repository });
    const controller = new ChatController({ service });

    router.get(
      '/messages/:userId',
      [AuthMiddleware.authentication],
      controller.getMessages.bind(controller),
    );

    return router;
  }
}
