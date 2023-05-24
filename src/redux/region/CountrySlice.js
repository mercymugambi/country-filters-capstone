import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const getCountries = createAsyncThunk('countries/getCountries', async () => fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()));

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await fetch('https://restcountries.com/v3.1/region/africa');
  const data = await response.json();
  return data;
});

const CountrySlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        console.log(state.countries);
      })
      .addCase(getCountries.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default CountrySlice.reducer;
