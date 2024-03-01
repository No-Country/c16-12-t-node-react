import { useEffect, useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { TRIPS } from '@/services/apiServices/Trips.service';

const TripContext = createContext();

function TripProvider({ children }) {
  const [trips, settrips] = useState([]);

  useEffect(() => {
    TRIPS.getTrips()
      .then((trips) => {
        settrips({
          ...trips,
          ['trips']: trips.data,
        });
      })
      .catch(console.error);
  }, []);

  const getTrip = (tripId) => {
    TRIPS.getTrip(tripId)
      .then((trip) => {
        settrips({
          ...trips,
          ['trip']: trip,
        });
      })
      .catch(console.error);
  };

  const createTrip = (newTripData) => {
    TRIPS.createTrip(newTripData)
      .then((trip) =>
        settrips({
          ...trips,
          ['trip']: trip,
        })
      )
      .catch(console.error);
  };

  const updateTrip = (tripId, updateTripData) => {
    TRIPS.updateTrip(tripId, updateTripData)
      .then((trip) =>
        settrips({
          ...trips,
          ['trip']: trip,
        })
      )
      .catch(console.error);
  };

  const deleteTrip = (tripId) => {
    TRIPS.deleleTrip(tripId)
      .then(() =>
        settrips({
          ...trips,
          ['trip']: {},
        })
      )
      .catch(console.error);
  };

  const reserveTrip = (tripId) => {
    TRIPS.reserveTrip(tripId)
      .then((reserve) =>
        settrips({
          ...trips,
          ['trip']: reserve,
        })
      )
      .catch(console.error);
  };

  const cancelTrip = (tripId) => {
    TRIPS.cancelTrip(tripId)
      .then((reserveCanceled) =>
        settrips({
          ...trips,
          ['trip']: reserveCanceled,
        })
      )
      .catch(console.error);
  };

  return (
    <TripContext.Provider
      value={{
        trips,
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
