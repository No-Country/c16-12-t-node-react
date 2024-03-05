import { HandleError } from '../errors/index.js';

export class ChatController {
  constructor({ service }) {
    this.service = service;
  }

  getMessages = (req, res) => {
    const { userId } = req.params;
    const { user } = req.body;

    return this.service
      .getMessages({ userRecipientId: userId, userSenderId: user?.id })
      .then((message) => res.status(200).json(message))
      .catch((err) => HandleError.handle(err, res));
  };
}
