import { axiosAdapter } from '../api/adapters/axios.adapter';
import { TOKEN } from '@/config/config';
import {
  RATINGS_ENDPOINT,
  RATING_WITH_ID_ENDPOINT,
} from '../api/endpoints/endpoints';
import { getHeaders } from '../utils/fetch-config';
import { getFromSessionStorage } from '../utils/handle-token.utils';

const token = getFromSessionStorage(TOKEN);
const config = getHeaders(token);

export const RATINg = {
  getRatings: async () => {
    try {
      return await axiosAdapter(config).get(RATINGS_ENDPOINT);
    } catch (error) {
      throw new Error(error);
    }
  },
  createRating: async (newRatingData) => {
    try {
      return await axiosAdapter(config).post(RATINGS_ENDPOINT, newRatingData);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateRating: async (ratingId, updateRatingData) => {
    try {
      return await axiosAdapter(config).patch(
        RATING_WITH_ID_ENDPOINT(ratingId),
        updateRatingData
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
