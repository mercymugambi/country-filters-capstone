import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './region/CountrySlice';

const store = configureStore({
  reducer: {
    countries: CountryReducer,
  },
});

export default store;
