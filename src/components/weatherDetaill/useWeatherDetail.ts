import { getCityData } from "../../store/slices/weatherSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import weatherConditionIcon from "../../constants/weatherIcons";
import { monthsList } from "../../constants/monthsList";
import { daysList } from "../../constants/daysList";
import { setCel, setFah, convertTemp } from "../../store/slices/unitSlice";

const useWeatherDetail = (lat: string | null, lon: string | null) => {
  const weatherData = useAppSelector((state) => state.weather?.data);
  const data = useAppSelector((state) => state.unit);
  const dispatch = useAppDispatch();
  const unit = data?.unit;
  const temperaturConvert =
    data?.convertedTemp !== null && data?.convertedTemp !== undefined
      ? Math.floor(data?.convertedTemp)
      : null;

  const {
    clearDaySun,
    clearNight,
    cloudyDay,
    cloudyNight,
    fewCloudsDay,
    fewCloudsNight,
    fogFoggySun,
    fogFoggyMon,
    rainDay,
    rainNight,
    snowDay,
    snowNight,
    stormDay,
    stormNight,
  } = weatherConditionIcon;

  function currentDate(): string {
    const months = monthsList;
    const days = daysList;
    const today = new Date();
    const weekDay = days[today.getDay()];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const day = today.getDate();
    const formatDate = `${weekDay}, ${month} ${day}, ${year}`;
    return formatDate;
  }

  function currentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const time = `${hours}:${minutes}`;
    return time;
  }

  const kelvinToCelsius = (tempInKelvin: number): number =>
    tempInKelvin - 273.15;
  const kelvinToFahrenheit = (tempInKelvin: number): number =>
    ((tempInKelvin - 273.15) * 9) / 5 + 32;

  const main = weatherData?.main;
  const city = weatherData?.name;
  const country = weatherData?.sys?.country || "Unknown";
  const weatherArray = weatherData?.weather;
  const weather = weatherArray?.[0];
  const getIcon = weather?.icon;

  useEffect(() => {
    if (weatherData?.main?.temp !== undefined) {
      dispatch(convertTemp({ temp: weatherData.main.temp, toUnit: unit }));
    }
  }, [weatherData, unit, dispatch]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!lat || !lon) return;
      await dispatch(getCityData({ lat, lon }));
    };
    fetchWeather();
  }, [lat, lon]);
  return {
    clearDaySun,
    clearNight,
    cloudyDay,
    cloudyNight,
    fewCloudsDay,
    fewCloudsNight,
    fogFoggySun,
    fogFoggyMon,
    rainDay,
    rainNight,
    snowDay,
    snowNight,
    stormDay,
    stormNight,
    dispatch,
    unit,
    temperaturConvert,
    currentDate,
    currentTime,
    kelvinToCelsius,
    kelvinToFahrenheit,
    main,
    city,
    country,
    weather,
    getIcon,
    setCel,
    setFah,
  };
};

export default useWeatherDetail;
