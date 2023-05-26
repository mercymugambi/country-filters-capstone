import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from '../redux/region/CountrySlice';

describe('Store Configuration', () => {
  test('return the correct reducer', () => {
    const store = configureStore({
      reducer: {
        countries: CountryReducer,
      },
    });

    expect(store.getState().countries).toMatchSnapshot();
  });
});
