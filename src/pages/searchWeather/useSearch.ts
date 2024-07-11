import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSearchLoader = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const lat = queryParam.get("lat");
  const lon = queryParam.get("lon");

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const loader = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {}
    };
    loader();
  }, [lat, lon]);

  return { isLoading, lat, lon };
};

export default useSearchLoader;
