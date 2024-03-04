import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { COUNTRIES } from '@/services/apiServices/country.sercive';

const CountryContext = createContext();

function CountryProvider({ children }) {
  const countryData = {
    countries: [],
    country: {},
  };

  const [countries, setCountries] = useState(countryData);

  useEffect(() => {
    COUNTRIES.getCountries()
      .then((countries) => {
        setCountries({
          ...countries,
          ['countries']: countries.data,
        });
      })
      .catch(console.error);
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
