import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Countries from './components/Countries';
import { getCountries } from './redux/region/CountrySlice';
import CountryDetails from './components/CountryDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:tld" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
