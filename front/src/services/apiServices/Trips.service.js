import { TOKEN } from '@/config/config';
import { axiosAdapter } from '../api/adapters/axios.adapter';
import { getFromSessionStorage } from '../utils/handle-token.utils';
import { getHeaders } from '../utils/fetch-config';
import {
  CALCEL_RESERVATIONS_ENDPOINT,
  RESERVATIONS_ENDPOINT,
  TRIPS_BY_USER_ENDPOINT,
  TRIPS_ENDPOINT,
  TRIP_WITH_ID_ENDPOINT,
  USER_RESERVATION_ENDPOINT,
} from '../api/endpoints/endpoints';

const token = getFromSessionStorage(TOKEN);
const config = getHeaders(token);

export const TRIPS = {
  getTrips: async () => {
    try {
      return await axiosAdapter().get(TRIPS_ENDPOINT);
    } catch (error) {
      throw new Error(error);
    }
  },
  getTrip: async (tripId) => {
    try {
      return await axiosAdapter().get(TRIP_WITH_ID_ENDPOINT(tripId));
    } catch (error) {
      throw new Error(error);
    }
  },
  createTrip: async (newTripData) => {
    try {
      return await axiosAdapter(config).post(TRIPS_ENDPOINT, newTripData);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateTrip: async (countryId, updateTripData) => {
    try {
      return await axiosAdapter(config).patch(
        TRIP_WITH_ID_ENDPOINT(countryId),
        updateTripData
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  deleleTrip: async (tripId) => {
    try {
      return await axiosAdapter(config).delete(TRIP_WITH_ID_ENDPOINT(tripId));
    } catch (error) {
      throw new Error(error);
    }
  },
  getUserTripsReservations: async (userId) => {
    try {
      return axiosAdapter(config).get(USER_RESERVATION_ENDPOINT(userId));
    } catch (error) {
      throw new Error(error);
    }
  },
  reserveTrip: async (tripId) => {
    try {
      return await axiosAdapter(config).post(RESERVATIONS_ENDPOINT(tripId));
    } catch (error) {
      throw new Error(error);
    }
  },
  cancelTrip: async (tripId) => {
    try {
      return await axiosAdapter(config).patch(
        CALCEL_RESERVATIONS_ENDPOINT(tripId)
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  geTripsByUser: async (userid) => {
    try {
      return await axiosAdapter(config).get(TRIPS_BY_USER_ENDPOINT(userid));
    } catch (error) {
      throw new Error(error);
    }
  },
};
