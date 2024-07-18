import WeatherLogo from "../../assets/images/WeatherLogo.png";
import useWeatherDetail from "./useWeatherDetail";

const WeatherDetail = ({ lat, lon }: { lat: string; lon: string }) => {
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

  }=useWeatherDetail(lat,lon)
 

  return (
    <>
      <div className="searchFeild w-full lg:w-1/2 p-3 mb-2 md:mb-0 md:p-4 bg-baseColor rounded-lg h-[396px] md:h-[720px]">
        <div className="searchBar flex items-center gap-3 mb-4">
          <button className="bg-inputColor py-2 px-2 rounded-lg">
            <img src={WeatherLogo} alt="" />
          </button>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() => dispatch(unit == "cel" ? setFah() : setCel())}
            />

            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-inputColorBase dark:bg-subHeadingColor peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#578fff] peer-checked:bg-[#6293f4]"></div>
          </label>

          <div className="w-full">
            <input
              className="w-full rounded-lg bg-inputColor px-5 py-[17px] text-base  text-inputTextColor border-none outline-none focus:outline-headingColor focus:transition ease-out duration-300"
              type="text"
              name=""
              id=""
              placeholder="search"
            />
          </div>
        </div>

        <div className="h-[304px] md:h-[616px]">
          <div className="bg-weatherBackground bg-no-repeat bg-cover bg-center h-full md:h-full p-5 md:p-8 rounded-lg flex flex-col justify-between gap-20 md:gap-0 ">
            <div className="flex justify-between">
              <div>
                <h2 className="text-base md:text-xl font-bold text-white">
                  {city} ,{country}
                </h2>
                <p className="text-xs md:text-[16px] font-normal mt-0.5 md:mt-2 text-white">
                  {currentDate()}
                </p>
              </div>
              <p className="text-white text-xs md:text-xl font-bold">
                {currentTime()}
              </p>
            </div>

            <div className="flex justify-between item-center ">
              <div className="flex flex-col justify-end">
                <h1 className="text-5xl md:text-[80px] text-white font-extrabold">
                  {" "}
                  {temperaturConvert !== null
                    ? `${temperaturConvert} °${unit === "cel" ? "c" : "f"}`
                    : "N/A"}{" "}
                </h1>
                <div className="flex flex-col justify-center md:flex-row md:gap-2">
                  <div className="text-white text-base md:text-xl font-bold">
                    {unit == "fah"
                      ? `${Math.floor(
                          main?.temp_max ? kelvinToFahrenheit(main.temp_max) : 0
                        )}°f / ${Math.floor(
                          main?.temp_min ? kelvinToFahrenheit(main.temp_min) : 0
                        )}°f`
                      : `${Math.floor(
                          main?.temp_max ? kelvinToCelsius(main.temp_max) : 0
                        )}°c / ${Math.floor(
                          main?.temp_min ? kelvinToCelsius(main.temp_min) : 0
                        )}°c`}
                  </div>
                  <div className="text-subHeadingColor font-normal text-sm md:text-xl ">
                    {weather?.description}
                  </div>
                </div>
              </div>
              <div className="w-[120px] md:w-[170px]">
                {getIcon == "01d" && <img src={clearDaySun} alt="" />}
                {getIcon == "01n" && <img src={clearNight} alt="" />}
                {getIcon == "02d" && <img src={fewCloudsDay} alt="" />}
                {getIcon == "02n" && <img src={fewCloudsNight} alt="" />}
                {getIcon == "03d" && <img src={cloudyDay} alt="" />}
                {getIcon == "03n" && <img src={cloudyNight} alt="" />}
                {getIcon == "04d" && <img src={fewCloudsDay} alt="" />}
                {getIcon == "04n" && <img src={fewCloudsNight} alt="" />}
                {getIcon == "09d" && <img src={rainDay} alt="" />}
                {getIcon == "09n" && <img src={rainNight} alt="" />}
                {getIcon == "10d" && <img src={clearDaySun} alt="" />}
                {getIcon == "10n" && <img src={clearNight} alt="" />}
                {getIcon == "11d" && <img src={stormDay} alt="" />}
                {getIcon == "11n" && <img src={stormNight} alt="" />}

                {getIcon == "13d" && <img src={snowDay} alt="" />}
                {getIcon == "13n" && <img src={snowNight} alt="" />}
                {getIcon == "50d" && <img src={fogFoggySun} alt="" />}
                {getIcon == "50n" && <img src={fogFoggyMon} alt="" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetail;
