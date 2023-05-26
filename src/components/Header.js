import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { LeftIcon } from './icons';
import africa from './assets/africa.png';

const Header = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <>
      <div className="navbar">
        {/* <NavLink to="/" className="backIcon"><LeftIcon /></NavLink> */}
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
