import React from 'react';
import { NavLink } from 'react-router-dom';
import { LeftIcon } from './icons';

const DetailsHeader = () => (
  <div className="navbar">
    <NavLink to="/" className="backIcon">
      <LeftIcon />
    </NavLink>
    <h1 className="theme">Population Metrics</h1>
  </div>
);

export default DetailsHeader;
