import { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TRIPS } from '@/services/apiServices/Trips.service';
import { getFromSessionStorage } from '@/services/utils/handle-token.utils';
import { USER_ID } from '@/config/config';

const TripContext = createContext();

const userID = getFromSessionStorage(USER_ID);

function TripProvider({ children }) {
  const [trip, setTrip] = useState({});
  const [tripData, setTrips] = useState({});
  const [tripsByUser, setTripsByUser] = useState([]);

  const [tripsReserved, setTripsReserved] = useState([]);
  const [userReservations, setUserReservations] = useState([]);

  const [searching, setSearching] = useState({
    origin: '',
    destiny: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    getTrips();
    if (userID) {
      getTripsByUser(userID);
      getUserReservations(userID);
    }
  }, []);

  const getPropsToFilter = (props) => {
    setSearching(props);
  };
  const getTrips = () => {
    TRIPS.getTrips()
      .then((trips) => setTrips(trips))
      .catch(console.error);
  };

  const getTrip = (tripId) => {
    TRIPS.getTrip(tripId)
      .then((trip) => setTrip(trip))
      .catch(console.error);
  };

  const createTrip = (newTripData) => {
    TRIPS.createTrip(newTripData)
      .then((newTrip) =>
        setTrips({ ...tripData, data: [...tripData.data, newTrip] })
      )
      .catch(console.error);
  };

  const updateTrip = (tripId, updateTripData) => {
    TRIPS.updateTrip(tripId, updateTripData)
      .then((tripUpdated) =>
        setTrips({
          ...tripData,
          data: [...tripData.data, tripUpdated],
        })
      )
      .catch(console.error);
  };

  const deleteTrip = (tripId) => {
    TRIPS.deleleTrip(tripId)
      .then((confirm) => {
        if (confirm) {
          setTrips({
            ...tripData,
            data: tripData.data.filter((trip) => trip.id !== tripId),
          });
        }
      })
      .catch(console.error);
  };

  const getUserReservations = (userId) => {
    TRIPS.getUserTripsReservations(userId)
      .then(setUserReservations)
      .catch(console.error);
  };
  const reserveTrip = (tripId, seats) => {
    TRIPS.reserveTrip(tripId, seats)
      .then((reserve) =>
        setTripsReserved({
          ...tripsReserved,
          reserve,
        })
      )
      .catch(console.error);
  };

  const cancelTrip = (tripId, seats) => {
    TRIPS.cancelTrip(tripId, seats)
      .then((reserved) => setTripsReserved(reserved))
      .catch(console.error);
  };

  const getTripsByUser = (userId) => {
    TRIPS.geTripsByUser(userId)
      .then((trips) => setTripsByUser(trips))
      .catch(console.error);
  };

  return (
    <TripContext.Provider
      value={{
        trip,
        tripData,
        tripsReserved,
        tripsByUser,
        userReservations,
        searching,
        getTrips,
        getTrip,
        createTrip,
        updateTrip,
        deleteTrip,
        reserveTrip,
        cancelTrip,
        getTripsByUser,
        getUserReservations,
        getPropsToFilter,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

function useTrip() {
  return useContext(TripContext);
}

export { useTrip, TripProvider };

TripProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
