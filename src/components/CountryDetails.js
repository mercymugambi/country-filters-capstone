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
              <img className="flag-image-details" src={country.flags.png} alt={country.name.common} />
              <div className="country">
                <h2>
                  Country:
                  {' '}
                  {country.name.common}
                </h2>
              </div>
              <p className="data data1">
                <span className="label">Capital City:</span>
                <span>{country.capital}</span>
              </p>
              <p className="data data2">
                <span className="label">Population:</span>
                <span className="population-value">{country.population}</span>
              </p>
              <p className="data data1">
                <span className="label">Region:</span>
                <span>{country.region}</span>
              </p>
              <p className="data data2">
                <span className="label">subregion:</span>
                <span>{country.subregion}</span>
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
