import { NavLink } from 'react-router-dom';
import { LeftIcon } from './icons';
import africa from './assets/africa.png';

const Header = () => (
  <>
    <div className="navbar">
      <NavLink to="/" className="backIcon"><LeftIcon /></NavLink>
      <h1 className="theme">African Countries Population Metrics</h1>
    </div>
    <div className="mapSection">
      <img className="svg-container" src={africa} alt="africa" />
      <div className="totalCountries">
        <h3>
          <span className="tCountries">Total Countries</span>
          <br />
          {' '}
          {/* <span className="main-text">{country.length}</span> */}
          {' '}
          {/* <span className="after-text">Countries</span> */}
        </h3>
      </div>
    </div>
  </>
);

export default Header;
