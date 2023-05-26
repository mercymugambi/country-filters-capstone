import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/region/CountrySlice';
import Header from './Header';
import { RightIcon } from './icons';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countryMapping = {};
  countries.forEach((country) => {
    countryMapping[country.tld] = country;
  });

  const handleCountryClick = (tld) => {
    console.log(`Clicked country with TLD: ${tld}`);
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="countries-grid">
          {Object.keys(countryMapping).map((tld) => {
            const country = countryMapping[tld];
            return (
              <div key={country.tld} className="country-card-1">
                <Link to={`/countries/${country.tld}`} className="country-card" onClick={() => handleCountryClick(country.tld)}>
                  <div className="flag-container">
                    <img className="flag-image" src={country.flags.png} alt={country.name.common} />
                  </div>
                  <h3>{country.name.common}</h3>
                  <div className="popSection">
                    <p>{country.population}</p>
                    <span className="righticon"><RightIcon /></span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Countries;
