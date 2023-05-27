import React from 'react';
import { useSelector } from 'react-redux';
import africa from './assets/africa.png';

const Header = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <>
      <div className="navbar">
        <span className="theme">Population Metrics</span>
      </div>
      <div className="mapSection">
        <img className="svg-container" src={africa} alt="africa" />
        <div className="totalCountries">
          <span className="tCountries">Total Countries</span>
          <br />
          <span className="main-text">{countries.length}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
