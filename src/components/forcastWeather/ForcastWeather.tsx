import useForcastWeather from "./useForcastWeather";

const ForcastWeather = ({lat,lon,}: {
  lat: string | null;
  lon: string | null;
}) => {
  const { forcastData, convertToCelcius, getForecastDaysName, forcastIcon } =
    useForcastWeather(lat, lon);

  return (
    <>
      <div className="bg-baseColor rounded-xl md:h-[306px] md:px-6 md:py-7 ">
        <p className="hidden md:block text-base font-normal text-inputTextColor mb-5">
          5 day forecast
        </p>
        <div className="flex flex-nowrap gap-2 sm:gap-4 h:[176px] justify-center items-center px-3 py-3 ">
          {forcastData?.map((forcastDay) => (
            <div
              key={forcastDay.dt}
              className="card flex flex-col justify-center items-center gap-3 w-[67px] md:w-[116.4px]"
            >
              <p className="text-sm  text-subHeadingColor font-bold">
                {getForecastDaysName(forcastDay?.dt)}
              </p>
              <div className="w-[56px] h-[56px] md:w-[67px] md:h-[67px] ">
                <img src={forcastIcon(forcastDay?.weather?.[0]?.icon)} alt="" />
              </div>
              <p className="hidden lg:block text-sm text-subHeadingColor lg:h-[40px] xl:h-[20px] text-center font-light">
                {forcastDay?.weather?.[0]?.description}
              </p>
              <p className="flex flex-col justify-center md:flex md:flex-row lg:mt-3 text-white text-sm md:text-base font-bold">
                {forcastDay?.main?.temp !== undefined
                  ? Math.floor(convertToCelcius(forcastDay?.main?.temp))
                  : " "}
                ºc
                <span className="text-sm md:text-base md:hidden lg:block text-inputTextColor ml-0 md:ml-1 2xl:ml-1.5 font-normal">
                  {forcastDay?.main?.temp_min !== undefined
                    ? Math.floor(convertToCelcius(forcastDay?.main?.temp_min))
                    : " "}
                  ºc{" "}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ForcastWeather;
