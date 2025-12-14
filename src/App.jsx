import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cl from "./components/Cl";
import { FaArrowRightLong } from "react-icons/fa6";
import SpecialOffers from "./pages/SpecialOffers";
import RecommendedHotels from "./pages/RecommendedHotels";
import PopularDestinations from "./pages/PopularDestinations";
import YatraApp from "./pages/YatraApp";
import YatraServices from "./pages/YatraServices";
import WhyYatra from "./pages/WhyYatra";
import Footer from "./components/Footer";
import indio from './assets/indio.png'

const App = () => {
  return (
    <div className="bg-[#E4E4E4]">
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[87vh] bg-[url('https://www.yatra.com/react-home/_next/static/media/bg-homepage.23223c27.webp')] bg-cover bg-center bg-no-repeat">
        <div className="w-full sm:w-[98%] md:w-[96%] lg:w-[95%] h-screen mx-auto px-2 sm:px-0">
          <Header />
        </div>
      </div>

      <div className="flex  flex-col md:flex-row justify-between gap-3 md:gap-4 w-full sm:w-[98%] md:w-[96%] lg:w-[95%] mx-auto mt-[45vh] sm:mt-8 md:mt-10 lg:-mt-5  px-3 sm:px-4 md:px-0">
        <div className="border w-full md:w-[49%] flex justify-between items-center px-3 sm:px-4 md:px-3 py-4 sm:py-5 rounded-lg bg-white cursor-pointer transform hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          <div className="text-sm sm:text-base md:text-[15px] lg:text-[17px] font-semibold flex items-center gap-2 flex-wrap">
            <span className="whitespace-nowrap">Check</span>
            <img className="h-5 sm:h-6 mt-0 sm:mt-1" src={indio} alt="" />
            <span>Flights Cancellations</span>
          </div>
          <div className="shrink-0 ml-2">
            <FaArrowRightLong className="text-sm sm:text-base" />
          </div>
        </div>

        <div className="border w-full md:w-[49%] flex justify-between items-center px-3 sm:px-4 md:px-3 py-4 sm:py-5 rounded-lg bg-white cursor-pointer transform hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          <div className="text-sm sm:text-base md:text-[15px] lg:text-[17px] font-semibold">
            Claim Refund for Cancelled Indigo Flights
          </div>
          <div className="shrink-0 ml-2">
            <FaArrowRightLong className="text-sm sm:text-base" />
          </div>
        </div>
      </div>
      <SpecialOffers />
      <RecommendedHotels />
      <PopularDestinations />
      <YatraApp />
      <YatraServices />
      <WhyYatra />
      <Routes>
        <Route path="/cl" element={<Cl />} />
      </Routes>
      <Footer />
      <div className="flex flex-col items-center fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 z-50">
        <img className="h-16 sm:h-20 md:h-24 lg:h-28" src="https://www.yatra.com/b2cfrontend/diyaai2.png" alt="" />
      </div>
    </div>
  );
};

export default App;