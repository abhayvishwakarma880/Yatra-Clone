import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SpecialOffers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Flights",
    "Hotels",
    "Holidays",
    "Buses",
    "Rajasthan Attractions",
  ];

  const offers = [
    {
      id: 1,
      discount: "Flat ₹2,500 OFF",
      category: "On International Flights",
      description: "*Valid on VISA Credit Cards",
      code: "VISAINTL",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 2,
      discount: "Up to ₹5,000 Cashback",
      category: "On Domestic Hotels",
      description: "*Pay using PhonePe Wallet",
      code: "PHONEPE5000",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 3,
      discount: "Save ₹1,200",
      category: "On Bus Bookings",
      description: "*Applicable on all bus operators",
      code: "BUSRIDE12",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 4,
      discount: "Flat 15% OFF",
      category: "Holiday Packages",
      description: "*Get discount on Goa Packages",
      code: "GOAHOLIDAY",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 5,
      discount: "₹800 OFF",
      category: "On Theme Park Tickets",
      description: "*Valid for selected parks",
      code: "FUN800",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
  ];

  const Flights = [
    {
      id: 1,
      discount: "₹3,000 OFF",
      category: "On Domestic Flights",
      description: "*Valid on HDFC Credit Cards",
      code: "HDFCDOM",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 2,
      discount: "Flat ₹7,500 OFF",
      category: "International Flights",
      description: "*Applicable on Europe routes",
      code: "EUROTRIP",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 3,
      discount: "₹999 Cashback",
      category: "On Return Flights",
      description: "*Only on round trips",
      code: "RETURN999",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 4,
      discount: "Save 20%",
      category: "Premium Economy",
      description: "*Selected airlines only",
      code: "PREMIUM20",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 5,
      discount: "₹1,500 OFF",
      category: "Last Minute Deals",
      description: "*For flights departing today",
      code: "LAST1500",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
  ];

  const Hotels = [
    {
      id: 1,
      discount: "Flat 30% OFF",
      category: "Luxury Hotels",
      description: "*Valid on 5-star properties",
      code: "LUXURY30",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 2,
      discount: "₹1,000 OFF",
      category: "Budget Hotels",
      description: "*No minimum booking amount",
      code: "BUDGET1000",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 3,
      discount: "Free Breakfast",
      category: "City Hotels",
      description: "*Applicable on selected rooms",
      code: "BREAKFASTFREE",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 4,
      discount: "Flat ₹600 OFF",
      category: "Resorts",
      description: "*Valid during weekends",
      code: "RESORT600",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 5,
      discount: "Flat 12% OFF",
      category: "Guest Houses",
      description: "*Limited period offer",
      code: "GUEST12",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
  ];

  const Holidays = [
    {
      id: 1,
      discount: "₹10,000 OFF",
      category: "International Holidays",
      description: "*Valid for Singapore & Bali trips",
      code: "INTL10K",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 2,
      discount: "Flat 18% OFF",
      category: "Family Holiday Packs",
      description: "*Minimum 3 members",
      code: "FAMILY18",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 3,
      discount: "₹4,000 OFF",
      category: "Honeymoon Packages",
      description: "*Maldives special",
      code: "LOVE4000",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 4,
      discount: "Flat ₹2,200 OFF",
      category: "Adventure Trips",
      description: "*Valid on trekking tours",
      code: "TREK2200",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 5,
      discount: "Save 30%",
      category: "Desert Safaris",
      description: "*Rajasthan only",
      code: "DESERT30",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
  ];

  const Buses = [
    {
      id: 1,
      discount: "₹200 OFF",
      category: "On Sleeper Buses",
      description: "*Valid on RedBus partners",
      code: "SLEEP200",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 2,
      discount: "₹150 Cashback",
      category: "AC Buses",
      description: "*Pay using UPI",
      code: "UPI150",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 3,
      discount: "Save 10%",
      category: "Daily Commute",
      description: "*For office goers",
      code: "COMMUTE10",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 4,
      discount: "Flat ₹120 OFF",
      category: "Holiday Bus Trips",
      description: "*Weekend discounts only",
      code: "TRIP120",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 5,
      discount: "₹300 OFF",
      category: "Luxury Buses",
      description: "*Limited seats",
      code: "LUX300",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
  ];

  const Rajasthan_Attractions = [
    {
      id: 1,
      discount: "₹500 OFF",
      category: "Fort Tickets",
      description: "*Valid on Amer Fort, Jaipur",
      code: "AMER500",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 2,
      discount: "Save 20%",
      category: "Desert Safari",
      description: "*Jaisalmer only",
      code: "SAFARI20",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 3,
      discount: "₹300 OFF",
      category: "Palace Tours",
      description: "*City Palace Udaipur",
      code: "PALACE300",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 4,
      discount: "Flat 15% OFF",
      category: "Cultural Shows",
      description: "*Kalbeliya & folk dance events",
      code: "CULTURE15",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
    {
      id: 5,
      discount: "₹800 OFF",
      category: "Wildlife Safari",
      description: "*Ranthambore Tiger Reserve",
      code: "TIGER800",
      image:
        "https://www.yatra.com/ythomepagecms/media/todayspick_home/2025/Dec/8c2b8fb641a75d4080256d3bb59141ca.jpg?v=1765357229932",
    },
  ];

  const getCurrentList = () => {
    if (activeTab === "Flights") return Flights;
    if (activeTab === "Hotels") return Hotels;
    if (activeTab === "Holidays") return Holidays;
    if (activeTab === "Buses") return Buses;
    if (activeTab === "Rajasthan Attractions") return Rajasthan_Attractions;
    return offers;
  };

  const currentList = getCurrentList();

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (mqLg.matches) setVisibleCount(3);
      else if (mqMd.matches) setVisibleCount(2);
      else setVisibleCount(1);
    };

    update();
    mqLg.addEventListener("change", update);
    mqMd.addEventListener("change", update);

    return () => {
      mqLg.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, offers.length - visibleCount);
    if (activeIndex > maxIndex) setActiveIndex(maxIndex);
  }, [visibleCount, offers.length, activeIndex]);

  const nextCard = () => {
    const maxIndex = Math.max(0, offers.length - visibleCount);
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevCard = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const cardWidthPercent = 100 / visibleCount;
  const translateXPercent = activeIndex * cardWidthPercent;

  const renderOfferCards = (offerList) => (
    <div className="overflow-hidden relative cursor-pointer">
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${(offerList.length * 100) / visibleCount}%`,
          transform: `translateX(-${translateXPercent}%)`,
        }}
      >
        {offerList.map((offer) => (
          <div
            key={offer.id}
            className="p-2 sm:p-3 md:p-4"
            style={{ width: `${cardWidthPercent}%` }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border h-auto sm:h-[200px] md:h-[220px] flex flex-col sm:flex-row overflow-hidden transition-transform duration-300 hover:scale-[0.98]">
              <img
                src={offer.image}
                alt=""
                className="w-full h-32 sm:w-32 md:w-36 lg:w-40 sm:h-full object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none shrink-0"
              />

              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1 overflow-hidden">
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 line-clamp-1">
                  {offer.discount}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1 line-clamp-1">
                  {offer.category}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3 line-clamp-2">
                  {offer.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center font-inter font-normal leading-normal text-white rounded-[24px_0px] px-3 sm:px-[15px] py-1.5 sm:py-2 bg-[linear-gradient(90deg,#ff6d6d_0%,#ff424e_100%)] uppercase text-[11px] sm:text-[12px] md:text-[14px]">
                    {offer.code}
                  </span>

                  <div className="flex justify-end mt-2">
                    <button className="text-blue-600 font-medium text-[11px] sm:text-[12px] md:text-[13px] hover:text-blue-700 flex items-center gap-1 transition-all">
                      View Details
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white  rounded-xl sm:rounded-2xl py-4 sm:py-6 md:py-8 px-3 sm:px-4 w-[95%] sm:w-[98%] md:w-[96%] lg:w-[95%] mx-auto mt-10 sm:mt-8 md:mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Special Offers
          </h2>

          <div className="flex  items-center gap-2 ml-[80%] sm:ml-[20%] md:ml-[30%]  sm:gap-3">
            <button className="custom-prev p-1.5 sm:p-2 rounded-full border hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            <button className="custom-next p-1.5 sm:p-2 rounded-full border hover:bg-gray-100">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl
        text-[11px] sm:text-[12px] md:text-[13px] whitespace-nowrap transition
        cursor-pointer shrink-0 ${
          activeTab === tab
            ? "bg-red-100 text-red-600 border border-red-300"
            : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
        }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {currentList.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className="p-2 sm:p-3 md:p-4">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border h-auto sm:h-[200px] md:h-[220px] flex flex-col sm:flex-row overflow-hidden">
                  <img
                    src={offer.image}
                    alt=""
                    className="w-full h-32 sm:w-32 md:w-36 lg:w-40 sm:h-full object-cover"
                  />

                  <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1">
                      {offer.discount}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      {offer.category}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-3">
                      {offer.description}
                    </p>

                    <div className="mt-auto">
                      <span className="inline-flex text-white px-3 py-1 rounded-full bg-red-500 text-xs">
                        {offer.code}
                      </span>

                      <div className="flex justify-end mt-2">
                        <button className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer">
                          View Details <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
