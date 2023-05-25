import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/region/CountrySlice';
import Navbar from './Header';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // Create a mapping using Tid as the key
  const countryMapping = {};
  countries.forEach((country) => {
    countryMapping[country.tld] = country;
  });

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Object.keys(countryMapping).map((tld) => {
            const country = countryMapping[tld];
            return (
              <div key={country.tld}>
                <h3>{country.name.common}</h3>
                <p>
                  Official Name:
                  {' '}
                  {country.name.official}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Countries;
