import useWeatherCondition from "./useWeatherCondition";

const WeatherCondition = ({ lat, lon }: { lat: string; lon: string }) => {
  const {
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
  } = useWeatherCondition(lat, lon);

  return (
    <>
      <div className="bg-baseColor rounded-xl px-4 py-[4px] sm:py-0 md:pt-7 md:p-6 mb:pb-2 mb-2 md:mb-0 h-[300px] md:h-[398px]">
        <p className=" hidden md:block text-base font-normal text-inputTextColor pb-5">
          Today's weather details
        </p>

        <div className="weather-condition border-b border-[#1C1C27]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-6 md:w-8 flex justify-center">
                <img src={temp} alt="" />
              </div>
              <p className="text-subHeadingColor text-sm font-bold">
                Feels Like
              </p>
            </div>
            <div>
              <p className="text-textColor text-base sm:text-sm md:text-xl font-bold">
                {feelLike !== undefined
                  ? Math.floor(kelvinToCelsius(feelLike))
                  : "Loading..."}
                ºc
              </p>
            </div>
          </div>
        </div>

        <div className="weather-condition border-b border-[#1C1C27]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-6 md:w-8 ">
                <img src={rain} alt="" />
              </div>
              <p className="text-subHeadingColor text-sm font-bold">
                Probability of Rain
              </p>
            </div>
            <div>
              <p className="text-textColor text-base sm:text-sm md:text-xl  font-bold">0%</p>
            </div>
          </div>
        </div>

        <div className="weather-condition border-b border-[#1C1C27]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3 ">
              <div className="w-6 md:w-8">
                <img src={dry} alt="" />
              </div>
              <p className="text-subHeadingColor text-sm font-bold">
                Wind Speed
              </p>
            </div>
            <div>
              <p className="text-textColor text-base sm:text-sm md:text-xl font-bold">
                {feelLike
                  ? Math.floor(windSpeedConversion(pressure))
                  : "Loading..."}{" "}
                km/h
              </p>
            </div>
          </div>
        </div>

        <div className="weather-condition border-b border-[#1C1C27]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-6 md:w-8">
                <img src={humidity} alt="" />
              </div>
              <p className="text-subHeadingColor text-sm font-bold">
                Air Humidity
              </p>
            </div>
            <div>
              <p className="text-textColor text-base sm:text-sm md:text-xl font-bold">
                {windHumidity}%
              </p>
            </div>
          </div>
        </div>

        <div className="weather-condition border-b border-[#1C1C27]">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-6 md:w-8">
                <img src={sun} alt="" />
              </div>
              <p className="text-subHeadingColor text-sm font-bold">UV Index</p>
            </div>
            <div>
              <p className="text-textColor text-base sm:text-sm md:text-xl font-bold">5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCondition;
