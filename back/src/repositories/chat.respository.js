import { Op } from 'sequelize';

export class ChatRepository {
  constructor({ chatModel }) {
    this.chatModel = chatModel;
  }

  async getMessages(data) {
    const { userRecipientId, userSenderId } = data;

    return await this.chatModel.findAll({
      where: {
        [Op.or]: [
          { sender: userSenderId, recipient: userRecipientId },
          { sender: userRecipientId, recipient: userSenderId },
        ],
      },
    });
  }
}
