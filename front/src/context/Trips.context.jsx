import { useEffect, useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { TRIPS } from '@/services/apiServices/Trips.service';

const TripContext = createContext();

function TripProvider({ children }) {
  const [trip, setTrip] = useState({});
  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    TRIPS.getTrips()
      .then((trips) => setTrips(trips))
      .catch(console.error);
  };

  const getTrip = (tripId) => {
    TRIPS.getTrip(tripId)
      .then((trip) => {
        setTrip((prev) => ({ ...prev, trip }));
      })
      .catch(console.error);
  };

  const createTrip = (newTripData) => {
    TRIPS.createTrip(newTripData)
      .then((newTrip) => setTrip((prev) => ({ ...prev, newTrip })))
      .catch(console.error);
  };

  const updateTrip = (tripId, updateTripData) => {
    TRIPS.updateTrip(tripId, updateTripData)
      .then((trip) => setTrip((prev) => ({ ...prev, trip })))
      .catch(console.error);
  };

  const deleteTrip = (tripId) => {
    TRIPS.deleleTrip(tripId)
      .then((confirm) => {
        if (confirm) {
          setTrips(trips.filter((trip) => trip.id !== tripId));
        }
      })
      .catch(console.error);
  };

  const reserveTrip = (tripId) => {
    TRIPS.reserveTrip(tripId)
      .then((reserve) =>
        setTrips({
          ...trips,
          ['trip']: reserve,
        })
      )
      .catch(console.error);
  };

  const cancelTrip = (tripId) => {
    TRIPS.cancelTrip(tripId)
      .then((reserveCanceled) =>
        setTrips({
          ...trips,
          ['trip']: reserveCanceled,
        })
      )
      .catch(console.error);
  };

  return (
    <TripContext.Provider
      value={{
        trip,
        trips,
        getTrips,
        getTrip,
        createTrip,
        updateTrip,
        deleteTrip,
        reserveTrip,
        cancelTrip,
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
