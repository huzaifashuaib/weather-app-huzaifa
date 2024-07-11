import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherApi from "../../utilities/axiosInstance/axiosInstance";
import { OptionState, Location } from "../../type/types";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const initialState: OptionState = {
  data: [],
  loading: true,
  error: "",
};

export const getOptions = createAsyncThunk(
  "get/Options",
  async (value: string) => {
    try {
      const res = await openWeatherApi.get(
        `geo/1.0/direct?q=${value}&limit=3&appid=${apiKey}`
      );
      const data = res.data as Location[];
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getOptionStart = createAsyncThunk("get/OptionStart", async () => {
  return [];
});

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOptionStart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOptionStart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getOptionStart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data = [];
      })
      .addCase(getOptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOptions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getOptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data = [];
      });
  },
});

export default optionSlice.reducer;
