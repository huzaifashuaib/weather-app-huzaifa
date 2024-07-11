import { useEffect } from "react";
import { getForcastWeather } from "../../store/slices/forcasetSlice";
import weatherConditionIcon from "../../constants/weatherIcons";
import { useAppDispatch, useAppSelector } from "../../store/store";

const useForcastWeather = ( lat:string|null, lon:string|null ) => {
  const dispatch = useAppDispatch();
  const forcast = useAppSelector((state) => state.forcast?.data);
  const list = forcast?.list;
  const forcastData = list?.filter((data) =>
    data?.dt_txt?.includes("06:00:00")
  );

  const convertToCelcius = (tempInKelvin: number): number =>
    tempInKelvin - 273.15;

  const weekDays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getForecastDaysName = (dt: number): string => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    currentDate.setDate(currentDay + 1);
    const upComingDay = weekDays[currentDate.getDay()];
    const forecastDay = weekDays[new Date(dt * 1000).getDay()];
    if (upComingDay == forecastDay) return "Tomorrow";
    return forecastDay;
  };

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

  function forcastIcon(icon: string): string {
    switch (icon) {
      case "01d":
        return clearDaySun;
      case "01n":
        return clearNight;
      case "02d":
        return fewCloudsDay;
      case "02n":
        return fewCloudsNight;
      case "03d":
        return cloudyDay;
      case "03n":
        return cloudyNight;
      case "04d":
        return fewCloudsDay;
      case "04n":
        return fewCloudsNight;
      case "09d":
        return rainDay;
      case "09n":
        return rainNight;
      case "10d":
        return rainDay;
      case "10n":
        return rainNight;
      case "11d":
        return stormDay;
      case "11n":
        return stormNight;
      case "13d":
        return snowDay;
      case "13n":
        return snowNight;
      case "50d":
        return fogFoggySun;
      case "50n":
        return fogFoggyMon;
      default:
        return cloudyDay;
    }
  }

  useEffect(() => {
    if (!lat || !lon) return;
    const forcastWeather = async () =>
      await dispatch(getForcastWeather({ lat, lon }));
    forcastWeather();
  }, [lat, lon]);
  return {
    dispatch,
    forcast,
    list,
    forcastData,
    convertToCelcius,
    getForecastDaysName,
    forcastIcon,
  };
};

export default useForcastWeather;
