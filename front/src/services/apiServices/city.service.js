import { TOKEN } from '@/config/config';
import { axiosAdapter } from '../api/adapters/axios.adapter';
import { getHeaders } from '../utils/fetch-config';
import { getFromSessionStorage } from '../utils/handle-token.utils';
import {
  CITIES_ENDPOINT,
  CITY_WITH_ID_ENDPOINT,
} from '../api/endpoints/endpoints';

const token = getFromSessionStorage(TOKEN);
const config = getHeaders(token);

export const CITIES = {
  getCities: async () => {
    try {
      return await axiosAdapter(config).get(CITIES_ENDPOINT);
    } catch (error) {
      throw new Error(error);
    }
  },
  getCity: async (cityId) => {
    try {
      return await axiosAdapter(config).get(CITY_WITH_ID_ENDPOINT(cityId));
    } catch (error) {
      throw new Error(error);
    }
  },
  createCity: async (newCityData) => {
    try {
      return await axiosAdapter(config).post(CITIES_ENDPOINT, newCityData);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateCity: async (cityId, updateCityData) => {
    try {
      return await axiosAdapter(config).patch(
        CITY_WITH_ID_ENDPOINT(cityId),
        updateCityData
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteCity: async (cityId) => {
    try {
      return await axiosAdapter(config).delete(CITY_WITH_ID_ENDPOINT(cityId));
    } catch (error) {
      throw new Error(error);
    }
  },
};
