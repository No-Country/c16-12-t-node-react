import { TOKEN } from '@/config/config';
import { axiosAdapter } from '../api/adapters/axios.adapter';
import {
  COUNTRIES_ENDPOINT,
  COUNTRY_WITH_ID_ENDPOINT,
} from '../api/endpoints/endpoints';
import { getFromSessionStorage } from '../utils/handle-token.utils';
import { getHeaders } from '../utils/fetch-config';

const token = getFromSessionStorage(TOKEN);
const config = getHeaders(token);

export const COUNTRIES = {
  getCountries: async () => {
    try {
      return await axiosAdapter(config).get(COUNTRIES_ENDPOINT);
    } catch (error) {
      throw new Error(error);
    }
  },
  getCountry: async (countryId) => {
    try {
      return await axiosAdapter(config).get(
        COUNTRY_WITH_ID_ENDPOINT(countryId)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  createCountry: async (newCountryData) => {
    try {
      return await axiosAdapter(config).post(
        COUNTRIES_ENDPOINT,
        newCountryData
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  updateCountry: async (countryId, updateCountryData) => {
    try {
      return await axiosAdapter(config).patch(
        COUNTRY_WITH_ID_ENDPOINT(countryId),
        updateCountryData
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteCountry: async (countryId) => {
    try {
      return await axiosAdapter(config).delete(
        COUNTRY_WITH_ID_ENDPOINT(countryId)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
