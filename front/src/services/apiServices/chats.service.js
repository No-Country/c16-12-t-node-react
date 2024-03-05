import { axiosAdapter } from '../api/adapters/axios.adapter';
import { TOKEN } from '@/config/config';
import { CHATS_USERS_ENDPOINT } from '../api/endpoints/endpoints';
import { getHeaders } from '../utils/fetch-config';
import { getFromSessionStorage } from '../utils/handle-token.utils';

const token = getFromSessionStorage(TOKEN);
const config = getHeaders(token);

export const CHATS = {
  getChats: async (userRecipientId) => {
    try {
      return await axiosAdapter(config).get(
        CHATS_USERS_ENDPOINT(userRecipientId)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
