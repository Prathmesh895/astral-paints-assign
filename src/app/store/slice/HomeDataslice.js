import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '@/app/lib/apollo-client';
import { HOMEPAGE_QUERY } from '@/app/lib/queries';

export const fetchHomepageData = createAsyncThunk(
  'homepage/fetchHomepageData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.query({ query: HOMEPAGE_QUERY });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const homepageSlice = createSlice({
  name: 'homepage',
  initialState: {
    data: null, // Store all the fetched data here
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomepageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomepageData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Store the entire response in `data`
      })
      .addCase(fetchHomepageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectHomepageData = (state) => state.homepage;
export default homepageSlice.reducer;
