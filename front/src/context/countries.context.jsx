import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { COUNTRIES } from '@/services/apiServices/country.sercive';

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    COUNTRIES.getCountries().then(setCountries).catch(console.error);
  }, []);

  const getCountry = (countryId) => {
    COUNTRIES.getCountry(countryId).then((country) => {
      setCountries({
        ...countries,
        ['country']: country,
      });
    });
  };

  return (
    <CountryContext.Provider value={{ countries, getCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

function useCountry() {
  return useContext(CountryContext);
}

export { useCountry, CountryProvider };

CountryProvider.propTypes = {
  children: PropTypes.node,
};
