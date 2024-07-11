import { useState, useEffect, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getOptionStart, getOptions } from "../../store/slices/optionSlice";
import { useNavigate } from "react-router-dom";
import { City } from "../../type/types";

const useSearchHook = () => {
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOptionVisible, setOptionVisible] = useState(true);
  const navigate = useNavigate();

  const options = useAppSelector((state) => state.option.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      dispatch(getOptionStart());
      dispatch(getOptions(state));
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timerId);
  }, [state, dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
    if (value === "") {
      clearSuggestion();
      dispatch(getOptionStart());
    }
  };

  const onOptionSelect = (option: City) => {
    const { name, lat, lon, country } = option;
    const valueInput = `${name} ${country}`;
    setState(valueInput);
    setOptionVisible(false);

    setTimeout(() => {
      navigate(`detail?lat=${lat}&lon=${lon}`);
    }, 1000);
  };

  const clearSuggestion = () => {

  };

  return {
    state,
    setState,
    isLoading,
    setIsLoading,
    isOptionVisible,
    setOptionVisible,
    options,
    dispatch,
    handleChange,
    onOptionSelect,
    clearSuggestion,
  };
};

export default useSearchHook;
