import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { getCountries } from './redux/region/CountrySlice';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element=< {<home />} />
      </Routes>
    </>
  );
}

export default App;
