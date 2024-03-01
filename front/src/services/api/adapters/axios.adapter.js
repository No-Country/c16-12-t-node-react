import axios from 'axios';
import { API_BASE_URL } from '@/config/config';

export const axiosAdapter = (config) => {
  return {
    get: async (endPoint) => {
      const { data } = await axios.get(`${API_BASE_URL}${endPoint}`, config);
      return data;
    },
    post: async (endPoint, body) => {
      const { data } = await axios.post(
        `${API_BASE_URL}${endPoint}`,
        body,
        config
      );
      return data;
    },

    patch: async (endPoint, body) => {
      const { data } = await axios.patch(
        `${API_BASE_URL}${endPoint}`,
        body,
        config
      );
      return data;
    },

    delete: async (endPoint) => {
      const { data } = await axios.delete(`${API_BASE_URL}${endPoint}`, config);
      return data;
    },
  };
};
