import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UnitState } from "../../type/types";

const initialState: UnitState = {
  unit: "cel",
  convertedTemp: null,
};

const kelvinToCelsius = (tempInKelvin: number): number => tempInKelvin - 273.15;
const kelvinToFahrenheit = (tempInKelvin: number): number =>
  ((tempInKelvin - 273.15) * 9) / 5 + 32;

const convertTemperature = (temp: number, toUnit: "cel" | "fah"): number => {
  if (toUnit === "cel") {
    return kelvinToCelsius(temp);
  }
  return kelvinToFahrenheit(temp);
};

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setCel: (state) => {
      state.unit = "cel";
    },
    setFah: (state) => {
      state.unit = "fah";
    },
    convertTemp: (
      state,
      action: PayloadAction<{ temp: number; toUnit: "cel" | "fah" }>
    ) => {
      const { temp, toUnit } = action.payload;
      state.convertedTemp = convertTemperature(temp, toUnit);
    },
  },
});

export const { setCel, setFah, convertTemp } = unitSlice.actions;
export default unitSlice.reducer;
