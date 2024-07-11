import { configureStore } from "@reduxjs/toolkit";
import weatherSliceReducer from "./slices/weatherSlice";
import optionSliceReducer from "./slices/optionSlice";
import forcasetSliceReducer from "./slices/forcasetSlice";
import unitSliceReducer from "./slices/unitSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    weather: weatherSliceReducer,
    option: optionSliceReducer,
    forcast: forcasetSliceReducer,
    unit: unitSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
