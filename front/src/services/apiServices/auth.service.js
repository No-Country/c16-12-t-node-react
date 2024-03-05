import { TOKEN, USER_ID } from '@/config/config';
import { axiosAdapter } from '../api/adapters/axios.adapter';
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from '../api/endpoints/endpoints';
import {
  removefromSessionStorage,
  saveOnSessionStorage,
} from '../utils/handle-token.utils';

export const AUTH = {
  register: async (newUserData) => {
    try {
      const responser = await axiosAdapter().post(
        REGISTER_ENDPOINT,
        newUserData
      );
      const { token, user } = responser;

      saveOnSessionStorage(TOKEN, token);
      saveOnSessionStorage(USER_ID, user?.id);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
  login: async (credencials) => {
    try {
      const response = await axiosAdapter().post(LOGIN_ENDPOINT, credencials);
      const { token, user } = response;
      saveOnSessionStorage(TOKEN, token);
      saveOnSessionStorage(USER_ID, user.id);
      return user;
    } catch (error) {
      return console.error(`Error: ${error.message}`);
    }
  },
  logout: () => {
    removefromSessionStorage(TOKEN);
    removefromSessionStorage(USER_ID);
  },
};
