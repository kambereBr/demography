import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://countriesnow.space/api/v0.1/countries/population';
const initialState = {
  countries: [],
  isLoading: true,
  error: '',
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(`Failed to fetch the data, ${error}`);
  }
});

const getRecentPopulation = (populationCounts) => {
  const size = populationCounts.length - 1;
  return populationCounts[size].value;
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setFetchedCountries: (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
      state.error = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload.map((item) => ({
          country: item.country,
          iso3: item.iso3,
          code: item.code,
          populationCounts: getRecentPopulation(item.populationCounts),
          demography: item.populationCounts,
        }));
        state.countries = data;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.countries = [];
        state.error = action.payload;
      });
  },
});

export const getCountryByIso3 = (state, iso3) => {
  const data = state.countries.countries;
  return data.find((country) => country.iso3 === iso3);
};

export const getAllCountries = (state) => state.countries;
export default countriesSlice.reducer;
