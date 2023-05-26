import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../redux/region/CountrySlice';
import DetailsHeader from './DetailsHeader';

const CountryDetails = () => {
  const { tld } = useParams();
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const country = countries.find((country) => country.tld.includes(tld));

  return (
    <div>
      <DetailsHeader />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="country-details">
          {country ? (
            <>
              <div className="flag-container">
                <img className="flag-image" src={country.flags.png} alt={country.name.common} />
              </div>
              <h2>{country.name.common}</h2>
              <p>
                Capital:
                {' '}
                {country.capital}
              </p>
              <p>
                Population:
                {' '}
                {country.population}
              </p>
              <p>
                Region:
                {' '}
                {country.region}
              </p>
              <p>
                Subregion:
                {' '}
                {country.subregion}
              </p>
            </>
          ) : (
            <p>Country not found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
