import WeatherDetail from "../../components/weatherDetaill/WeatherDetail";
import ForcastWeather from "../../components/forcastWeather/ForcastWeather";
import WeatherCondition from "../../components/weatherCondition/WeatherCondition";
import loader from "../../assets/loader-svg/loader.svg";
import useSearchLoader from "./useSearch";

const SearchWeather = () => {
  const { isLoading, lat, lon } = useSearchLoader();

  return (
    <div className="bg-[#131319] min-h-screen 2xl:flex">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <img
            src={loader}
            alt="Loading..."
            className="animate-spin h-24 w-24"
          />
        </div>
      ) : (
        <div className=" max-w-[1366px] m-auto p-2 md:p-6 lg:flex lg:flex-row lg:gap-5 lg:justify-center lg:items-center md:flex md:flex-col md:gap-3">
          {/* Weather Search */}
          <WeatherDetail lat={lat ?? ""} lon={lon ?? ""} />

          {/* Weather Status */}
          <div className="weatherStatus w-full lg:w-1/2 lg:flex lg:flex-col lg:gap-4 h-full md:flex md:flex-col md:gap-3 ">
            <WeatherCondition lat={lat ?? ""} lon={lon ?? ""} />
            <ForcastWeather lat={lat ?? ""} lon={lon ?? ""} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchWeather;
