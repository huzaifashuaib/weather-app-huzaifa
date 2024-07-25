import loader from "../../assets/loader-svg/loader.svg";
import useSearchHook from "./useSearchBar";

const SearchBar = () => {
  const {
    state,
    isLoading,
    isOptionVisible,
    options,
    handleChange,
    onOptionSelect,
  } = useSearchHook();

  return (
    <>
      <div className="relative">
        <input
          className="w-full rounded-lg bg-inputColor px-5 py-[17px] text-base text-inputTextColor font-normal border-none outline-none focus:outline-headingColor focus:transition ease-out duration-300"
          type="text"
          placeholder="Search Location"
          value={state}
          maxLength={45}
          onChange={handleChange}
        />
        {isLoading && (
          <div className="absolute top-4 right-2 flex items-center pr-3 sm:top-14 md:top-4">
            <img
              src={loader}
              alt="Loading..."
              className="animate-spin h-6 w-6"
            />
          </div>
        )}
        <ul
          className={`bg-[rgb(59,59,84)] absolute w-full rounded-lg mt-2 ${
            isOptionVisible || state ? "" : "hidden"
          }`}
        >
          {options.map((city) => (
            <li
              onClick={() => onOptionSelect(city)}
              key={`${city?.name}${city?.country}`}
              className="bg-option cursor-pointer flex items-center text-white px-4 py-5 text-[16px] font-normal border-b border-inputColor"
            >
              <button>
                {city?.name}-{city?.country}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
