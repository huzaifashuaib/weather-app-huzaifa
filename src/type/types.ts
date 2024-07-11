export type City = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

//Option Slice Type

export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};

export type OptionState = {
  data: Location[] | [];
  loading: boolean;
  error: string | null;
};

// WeatherDetail Slice

export type WeatherDetailType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
  sys: {
    country: string;
  };
  timezone: number;
  name: string;
};

// WeatherSlice Type

export type WeatherState = {
  data: WeatherDetailType | null;
  loading: boolean;
  error: string | null;
};

// Weather Icon Type

export type WeatherIcon = {
  clearDaySun: string;
  clearNight: string;
  cloudyDay: string;
  cloudyNight: string;
  fewCloudsDay: string;
  fewCloudsNight: string;
  fogFoggySun: string;
  fogFoggyMon: string;
  rainDay: string;
  rainNight: string;
  snowDay: string;
  snowNight: string;
  stormDay: string;
  stormNight: string;
};

// Forcast Component Type

export type MainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type WeatherType = {
  description: string;
  icon: string;
};

export type ForcastDayType = {
  dt: number;
  main: MainType;
  weather: WeatherType[];
  dt_txt: string;
};

export type ForcastWeekType = {
  list: ForcastDayType[] | [];
};

export type ForcastState = {
  data: ForcastWeekType | null;
  loading: boolean;
  error: string | null;
};

// Unit Slice Type

export type UnitState = {
  unit: "cel" | "fah";
  convertedTemp: number | null;
};
