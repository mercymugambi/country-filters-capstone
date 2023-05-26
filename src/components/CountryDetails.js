import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountryByTLD } from '../redux/region/CountrySlice';
import Header from './Header';
import { RightIcon } from './icons';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { tld } = useParams();

  useEffect(() => {
    dispatch(getCountryByTLD(tld));
  }, [dispatch, tld]);

  const country = useSelector((state) => state.countries.country);

  return (
    <div>
      <Header />
      {country ? (
        <div className="country-details">
          <div className="flag-container">
            <img className="flag-image" src={country.flags.png} alt={country.name.common} />
          </div>
          <h2>{country.name.common}</h2>
          <div className="population-section">
            <p>
              Population:
              {country.population}
            </p>
            <span className="right-icon">
              <RightIcon />
            </span>
          </div>
          {/* Render additional country details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetails;
