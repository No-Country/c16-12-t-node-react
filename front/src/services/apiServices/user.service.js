import { axiosAdapter } from '../api/adapters/axios.adapter';
import { TOKEN } from '@/config/config';
import { getFromSessionStorage } from '../utils/handle-token.utils';
import { getHeaders } from '../utils/fetch-config';
import {
  USERS_ENDPOINT,
  USER_RATING_ENDPOINT,
  USER_WITH_ID_ENDPOINT,
} from '../api/endpoints/endpoints';

const token = getFromSessionStorage(TOKEN);
const config = getHeaders(token);

export const USER = {
  getUsers: async () => {
    try {
      return await axiosAdapter().get(USERS_ENDPOINT);
    } catch (error) {
      return console.error(`Error: ${error}`);
    }
  },
  getUser: async (userId) => {
    try {
      return await axiosAdapter(config).get(USER_WITH_ID_ENDPOINT(userId));
    } catch (error) {
      return console.error(`Error: ${error}`);
    }
  },
  updateUser: async (userId, updateUserData) => {
    try {
      return await axiosAdapter(config).patch(
        USER_WITH_ID_ENDPOINT(userId),
        updateUserData
      );
    } catch (error) {
      return console.error(`Error: ${error}`);
    }
  },
  deleteUser: async (userId) => {
    try {
      return await axiosAdapter(config).delete(USER_WITH_ID_ENDPOINT(userId));
    } catch (error) {
      return console.error(`Error: ${error}`);
    }
  },
  updateRating: async (userId, rating) => {
    try {
      return await axiosAdapter(config).patch(USER_RATING_ENDPOINT(userId), {
        rating,
      });
    } catch (error) {
      return console.error(`Error: ${error}`);
    }
  },
};
