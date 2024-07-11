import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import SearchWeather from "../pages/searchWeather/SearchWeather";

const Index = () => {
  return (
    <div className=" bg-backgroundImg bg-cover bg-center bg-no-repeat min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<SearchWeather />} />
        <Route
          path="/*"
          element={
            <h1 className="text-white text-5xl flex justify-center items-center h-screen">
              404 page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default Index;
