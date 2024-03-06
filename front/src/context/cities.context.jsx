import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CITIES } from '@/services/apiServices/city.service';

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});

  useEffect(() => {
    CITIES.getCities().then(setCities).catch(console.error);
  }, []);

  const getCity = (cityId) => {
    CITIES.getCity(cityId).then(setCity).catch(console.error);
  };

  return (
    <CityContext.Provider value={{ city, cities, getCity }}>
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  return useContext(CityContext);
}

export { useCity, CityProvider };

CityProvider.propTypes = {
  children: PropTypes.node,
};
