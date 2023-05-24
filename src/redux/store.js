import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './region/CountrySlice';

const store = configureStore({
  reducer: {
    country: CountryReducer,
  },
});

export default store;
