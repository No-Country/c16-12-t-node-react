import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CITIES } from '@/services/apiServices/city.service';

const CityContext = createContext();

function CityProvider({ children }) {
  const cityData = {
    cities: [],
    city: {},
  };

  const [cities, setCities] = useState(cityData);

  useEffect(() => {
    CITIES.getCities()
      .then((cities) => {
        setCities({
          ...cities,
          ['roles']: cities.data,
        });
      })
      .catch(console.error);
  }, []);

  const getCity = (cityId) => {
    CITIES.getCity(cityId)
      .then((city) => {
        setCities({
          ...cities,
          ['city']: city,
        });
      })
      .catch(console.error);
  };

  return (
    <CityContext.Provider value={{ cities, getCity }}>
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
