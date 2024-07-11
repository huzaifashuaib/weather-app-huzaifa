import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";

function Home() {
  return (
    <div className="h-screen ">
      {/* Logo*/}
      <Header />
      <main className="h-screen w-full flex items-center justify-center">
        {/* Hero Section */}
        <section className="hero-section w-[311px] sm:w-[506px] mx-8">
          <div className="text-center">
            <h1 className=" text-xl sm:text-4xl font-[700]  text-white">
              Welcome to{" "}
              <span className="text-white sm:text-headingColor">
                Weather App
              </span>
            </h1>
            <p className="text-sm sm:text-xl font-[400] text-subHeadingColor mt-[8px]">
              Choose a location to see weather forecast
            </p>
          </div>
          <SearchBar />
        </section>
      </main>
    </div>
  );
}

export default Home;