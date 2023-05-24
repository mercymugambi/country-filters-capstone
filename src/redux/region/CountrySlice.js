import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const CountrySlice = createSlice({

  name: 'countries',
  initialState,

  reducers: {

  },
});

export default CountrySlice;
