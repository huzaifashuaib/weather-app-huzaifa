import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import openWeatherApi from "../../utilities/axiosInstance/axiosInstance";
import { ForcastState, ForcastWeekType } from "../../type/types";


const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const initialState: ForcastState = {
  data: null,
  loading: false,
  error: null,
};

export const getForcastWeather = createAsyncThunk(
  "get/ForcastWeather",
  async ({ lat, lon }: { lat: string; lon: string }) => {
    try {
      const request = await openWeatherApi.get(
        `data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}`
      );
      const data = request.data as ForcastWeekType;

      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const forcastWeather = createSlice({
  name: "weatherForcast",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(getForcastWeather.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(getForcastWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(
        getForcastWeather.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = null;
          state.error = action.payload;
        }
      );
  },
});

export default forcastWeather.reducer;
