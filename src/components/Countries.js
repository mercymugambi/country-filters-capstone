import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/region/CountrySlice';
import Header from './Header';
import { RightIcon } from './icons';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.countries);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countryMapping = {};
  if (countries) {
    countries.forEach((country) => {
      countryMapping[country.tld] = country;
    });
  }

  const handleCountryClick = (tld) => {
    console.log(`Clicked country with TLD: ${tld}`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countries
    ? Object.values(countryMapping).filter((country) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="search-container">
        <p className="search-Title">Search For Country</p>
        <input
          className="search-Input-Area"
          placeholder="e.g. Kenya"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="countries-grid">
          {filteredCountries.map((country) => (
            <div key={country.tld} className="country-card-1">
              <Link
                to={`/countries/${country.tld}`}
                className="country-card"
                onClick={() => handleCountryClick(country.tld)}
              >
                <span className="righticon"><RightIcon /></span>
                <img className="flag-image" src={country.flags.png} alt={country.name.common} />
                <div className="popSection">
                  <p>{country.population}</p>
                  <h3>{country.name.common}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
