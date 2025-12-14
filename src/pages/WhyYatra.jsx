import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function WhyYatra() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      icon: <Search className="w-5 h-5" />,
      image:
        "https://www.yatra.com/react-home/images/whyYatra/flightsAndHotels.svg",
      title: "Search Flights and Hotels with Exclusive Deals",
      content:
        "Search for exclusive deals on flights and hotels. Find cheap air tickets to any destination you like. Choose from its vast repository of hotels - from budget, mid-range, five-star to niche boutique properties. Widen your choices with options like flexi stay, pay directly at hotel, and guaranteed standard amenities. Extremely efficient and easy.",
    },
    {
      image:
        "https://www.yatra.com/react-home/images/whyYatra/flightTicketBooking.svg",
      title: "Enjoy Secure Flight Bookings with Protection",
      content:
        "Enjoy cancellation protection on domestic flights. Benefit from fare drop protection, same day cancellation protection, hold now - pay later, on international flight bookings. Great filters, fantastic navigation.",
    },
    {
      image: "https://www.yatra.com/react-home/images/whyYatra/holidaySuit.svg",
      title: "Holiday Options for Every Budget and Interest",
      content:
        "Plan a honeymoon, a weekend getaway, or an adventure activity. Select from an array of domestic and international destinations well-suited to every spectrum of traveller. Be it flights, hotels, pre-planned itinerary, transport upon arrival/departure or sightseeing - you are covered. Attractive pricing, well-researched itineraries.",
    },
    {
      image:
        "https://www.yatra.com/react-home/images/whyYatra/findCombination.svg",
      title: "Customize Your Trip with Best Combinations",
      content:
        "Your one-stop-shop to get the best combination of flights, hotels, activities, package holidays along with train and bus tickets. Yatra's powerful search engine lets you zero in on with precision.",
    },
    {
      image: "https://www.yatra.com/react-home/images/whyYatra/busTicket.svg",
      title: "Skip the Ticket Queue for Monument Visits",
      content:
        "Buy tickets to all ASI-protected monuments online. Its hassle-free and saves you from waiting in a queue under a scorching sun. Imagine gaining a breezy entry into the Taj Mahal!",
    },
    {
      image: "https://www.yatra.com/react-home/images/whyYatra/newDeal.svg",
      title: "Get New Deals Every Season for Flights and Hotels",
      content:
        "The onset of the festive season, an upcoming long weekend or a gazetted holiday, expect an attractive deal on flights, hotels and holidays coming your way. From cashback offers to promo code discounts, you are in for a hot deal.",
    },
    {
      image:
        "https://www.yatra.com/react-home/images/whyYatra/customerSupport.svg",
      title: "Cutomer Support Backend By Millions of Satisfied Travelers",
      content:
        "Our expert customer service team supports you before, during and after the booking. The several million customers since 2006 are proof.",
    },
  ];

  return (
    <div className="w-full sm:w-[98%] md:w-[96%] lg:w-[95%] mx-auto mt-6 sm:mt-8 md:mt-10 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="lg:ml-12 lg:mr-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
              Why Yatra?
            </h1>

            <div className="space-y-2 sm:space-y-3 max-w-full lg:max-w-md ">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between cursor-pointer p-3 sm:p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 ">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 shrink-0"
                        src={section.image}
                        alt=""
                      />
                      <span className="font-medium text-gray-900 text-left text-xs sm:text-sm">
                        {section.title}
                      </span>
                    </div>
                    <div className="text-gray-400 shrink-0 ml-2">
                      {openSection === index ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden  transition-all duration-500 ease-in-out
  border-t border-gray-100
    ${openSection === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
  `}
                  >
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[420px] mx-auto lg:mx-0 mt-6 sm:mt-8 lg:mt-10 h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <img
              src="https://www.yatra.com/react-home/_next/image?url=%2Freact-home%2Fimages%2FwhyYatra%2FwhyYatraMobile.webp&w=1920&q=75"
              alt="Yatra App Interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
