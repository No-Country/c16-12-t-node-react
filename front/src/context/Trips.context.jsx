import { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { TRIPS } from '@/services/apiServices/Trips.service';

const TripContext = createContext();

function TripProvider({ children }) {
  const [trip, setTrip] = useState({});
  const [tripData, setTrips] = useState({});
  const [tripsReserved, setTripsReserved] = useState({});
  const [TripsByUser, setTripsByUser] = useState([]);

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

  const reserveTrip = (tripId) => {
    TRIPS.reserveTrip(tripId)
      .then((reserve) =>
        setTripsReserved({
          ...tripsReserved,
          reserved: [...tripsReserved.reserved, reserve],
        })
      )
      .catch(console.error);
  };

  const cancelTrip = (tripId) => {
    TRIPS.cancelTrip(tripId)
      .then((tripReserved) => console.log(tripReserved))
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
        TripsByUser,
        getTrips,
        getTrip,
        createTrip,
        updateTrip,
        deleteTrip,
        reserveTrip,
        cancelTrip,
        getTripsByUser,
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
