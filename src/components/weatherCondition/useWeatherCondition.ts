import { useEffect } from "react";
import { getCityData } from "../../store/slices/weatherSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import weatherConditionIcon from "../../constants/weatherConditionIcon";

const useWeatherCondition = (lat: string | null, lon: string | null) => {
  const dispatch = useAppDispatch();
  const getData = useAppSelector((state) => state.weather);

  const { sun, dry, rain, humidity, temp } = weatherConditionIcon;

  const weatherCondition = getData?.data?.main;

  const feelLike: number | undefined = weatherCondition?.feels_like;
  const windHumidity: number | undefined = weatherCondition?.humidity;
  const pressure = weatherCondition?.pressure;
  const kelvinToCelsius = (tempInKelvin: number) => tempInKelvin - 273.15;
  const windSpeedConversion = (windSpeed: number | undefined): number => {
    if (windSpeed !== undefined) {
      return (windSpeed * 3.6) / 100;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const fetchWeatherCondition = async () => {
      if (!lat || !lon) return;
      await dispatch(getCityData({ lat, lon }));
    };
    fetchWeatherCondition();
  }, [lat, lon]);

  return {
    sun,
    dry,
    rain,
    humidity,
    temp,
    feelLike,
    windHumidity,
    pressure,
    kelvinToCelsius,
    windSpeedConversion,
  };
};

export default useWeatherCondition;
