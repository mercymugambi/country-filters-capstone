import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './region/CountrySlice';
import CountryDetailsReducer from './countryDetails/countryDetailsSlice';

const store = configureStore({
  reducer: {
    countries: CountryReducer,
    details: CountryDetailsReducer,
  },
});

export default store;
