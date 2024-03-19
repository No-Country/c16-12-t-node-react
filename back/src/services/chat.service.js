export class ChatService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getMessages(data) {
    const chats = await this.repository.getMessages(data);
    return chats;
  }
}
