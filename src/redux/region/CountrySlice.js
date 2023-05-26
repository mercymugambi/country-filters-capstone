import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await fetch('https://restcountries.com/v3.1/region/africa');
  const data = await response.json();
  return data;
});

export const CountrySlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default CountrySlice.reducer;
