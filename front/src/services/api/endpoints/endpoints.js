export const LOGIN_ENDPOINT = '/auth/login';
export const REGISTER_ENDPOINT = '/auth/register';
export const USERS_ENDPOINT = '/users';
export const USER_WITH_ID_ENDPOINT = (userId) => `${USERS_ENDPOINT}/${userId}`;

export const CITIES_ENDPOINT = '/cities';
export const CITY_WITH_ID_ENDPOINT = (cityId) => `${CITIES_ENDPOINT}/${cityId}`;

export const COUNTRIES_ENDPOINT = '/countries';
export const COUNTRY_WITH_ID_ENDPOINT = (countryId) =>
  `${COUNTRIES_ENDPOINT}/${countryId}`;

export const ROLES_ENDPOINT = '/roles';
export const ROLE_WITH_ID_ENDPOINT = (roleId) => `${ROLES_ENDPOINT}/${roleId}`;
export const RATINGS_ENDPOINT = '/ratings';

export const RATING_WITH_ID_ENDPOINT = (ratingId) =>
  `${RATINGS_ENDPOINT}/${ratingId}`;

export const TRIPS_ENDPOINT = '/trips';
export const TRIP_WITH_ID_ENDPOINT = (tripId) => `${TRIPS_ENDPOINT}/${tripId}`;

export const TRIPS_BY_USER_ENDPOINT = (userId) =>
  `${TRIPS_ENDPOINT}/${userId}/my-trips`;

export const RESERVATIONS_ENDPOINT = (tripId) =>
  `${TRIPS_ENDPOINT}/${tripId}/reserve`;
export const CALCEL_RESERVATIONS_ENDPOINT = (tripId) =>
  `${TRIPS_ENDPOINT}/${tripId}/cancel`;

export const CHATS_USERS_ENDPOINT = (userRecipientId) =>
  `/chats/messages/${userRecipientId}`;
