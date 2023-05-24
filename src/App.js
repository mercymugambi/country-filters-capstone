import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { getCountries } from './redux/region/CountrySlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
