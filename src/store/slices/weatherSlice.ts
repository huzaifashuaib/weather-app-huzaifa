import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherState, WeatherDetailType } from "../../type/types";
import openWeatherApi from "../../utilities/axiosInstance/axiosInstance";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

if (!apiKey) {
  throw new Error("Missing API key in environment variables");
}

const initialState: WeatherState = {
  data: null,
  loading: true,
  error: "",
};

export const getCityData = createAsyncThunk(
  "get/cityWeather",
  async ({ lat, lon }: { lat: string; lon: string }) => {
    try {
      const request = await openWeatherApi.get(
        `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      const data = request.data as WeatherDetailType;
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(getCityData.pending, (state) => {
        (state.loading = true), (state.data = null);
      })

      .addCase(getCityData.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })

      .addCase(getCityData.rejected, (state, action) => {
        (state.loading = false),
          (state.data = null),
          (state.error = action.payload as string);
      });
  },
});

export default weatherSlice.reducer;
