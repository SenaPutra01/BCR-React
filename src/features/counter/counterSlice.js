import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};
export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`);
  const data = await response.json();
  return data;
});
const CarSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCars.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchCars.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});
export const getAllCars = (state) => state.cars.data;

export default CarSlice.reducer;