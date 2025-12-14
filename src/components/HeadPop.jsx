import React, { useState } from "react";
import {
  Plane,
  Hotel,
  Palmtree,
  Bus,
  Train,
  Car,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const HeadPop = () => {
  const [fareType, setFareType] = useState("regular");
  const [tripType, setTripType] = useState("oneway");
  const [flights, setFlights] = useState([
    {
      from: "New Delhi",
      fromCode: "DEL, Indira Gandhi Internati...",
      to: "Mumbai",
      toCode: "BOM, Chhatrapati Shivaji Int...",
      date: "10",
      month: "Dec",
      year: "25",
      day: "Wednesday",
    },
    {
      from: "Mumbai",
      fromCode: "BOM, Chhatrapati Shivaji Int...",
      to: "Select City",
      toCode: "",
      date: "11",
      month: "Dec",
      year: "25",
      day: "Thursday",
    },
  ]);
  const [nonStop, setNonStop] = useState(false);

  const addAnotherCity = () => {
    setFlights([
      ...flights,
      {
        from: "Select City",
        fromCode: "",
        to: "Select City",
        toCode: "",
        date: "12",
        month: "Dec",
        year: "25",
        day: "Friday",
      },
    ]);
  };

  const getDateParts = () => {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = String(date.getFullYear()).slice(2);
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekday = weekDays[date.getDay()];
    return { day, month, year, weekday };
  };

  const { day, month, year, weekday } = getDateParts();

  return (
    <div className="bg-linear-to-br from-pink-50 to-orange-50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-white gap-2 pb-4 flex-wrap p-2 sm:p-3 rounded-t-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md relative text-sm sm:text-base">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <span className="font-semibold text-gray-800">Flights</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                Upto 19% Off
              </span>
            </button>
            <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition relative text-sm sm:text-base">
              <Hotel className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="font-medium text-gray-600">Hotels</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                Upto 50% Off
              </span>
            </button>
            <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Palmtree className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="font-medium text-gray-600 hidden sm:inline">Holidays</span>
            </button>
            <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Bus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="font-medium text-gray-600 hidden sm:inline">Bus</span>
            </button>
            <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Train className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="font-medium text-gray-600 hidden sm:inline">Trains</span>
            </button>
            <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Car className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="font-medium text-gray-600 hidden sm:inline">Cabs</span>
            </button>
          </div>

          <button className="flex cursor-pointer items-center gap-1 sm:gap-2 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition border border-purple-200 text-sm sm:text-base">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            <span className="font-semibold text-gray-800 italic">Diya AI</span>
          </button>
        </div>

        <div className="bg-[#FCEAEA] shadow-xl p-3 sm:p-4 md:p-6 rounded-b-2xl">
          <div className="flex gap-3 sm:gap-6 mb-4 sm:mb-6 flex-wrap">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-gray-700 font-medium text-sm sm:text-base">One Way</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="round"
                checked={tripType === "round"}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Round Trip</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="multi"
                checked={tripType === "multi"}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4 accent-red-500"
              />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Multi City</span>
            </label>
          </div>

          {tripType === "multi" &&
            flights.map((flight, index) => (
              <div key={index} className="mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
                  <div className="lg:col-span-3">
                    <label className="text-xs sm:text-sm text-gray-600 mb-1 block">
                      From
                    </label>
                    <div className="border rounded-lg p-2 sm:p-3 cursor-pointer hover:border-red-500 transition">
                      <div className="font-bold text-xl sm:text-2xl text-gray-800">
                        {flight.from}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {flight.fromCode}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <label className="text-xs sm:text-sm text-gray-600 mb-1 block">To</label>
                    <div className="border rounded-lg p-2 sm:p-3 cursor-pointer hover:border-red-500 transition">
                      <div className="font-bold text-xl sm:text-2xl text-gray-800">
                        {flight.to}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {flight.toCode}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <label className="text-xs sm:text-sm text-gray-600 mb-1 block flex items-center gap-1">
                      Departure Date <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    </label>
                    <div className="border rounded-lg p-2 sm:p-3 cursor-pointer hover:border-red-500 transition">
                      <div className="font-bold text-xl sm:text-2xl text-gray-800">
                        {flight.date} {flight.month}'{flight.year}
                      </div>
                      <div className="text-xs text-gray-500">{flight.day}</div>
                    </div>
                  </div>

                  {index === 0 && (
                    <div className="lg:col-span-3">
                      <label className="text-xs sm:text-sm text-gray-600 mb-1 block flex items-center gap-1">
                        Travellers & Class <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                      </label>
                      <div className="border rounded-lg p-2 sm:p-3 cursor-pointer hover:border-red-500 transition">
                        <div className="font-bold text-xl sm:text-2xl text-gray-800">
                          1 Traveller
                        </div>
                        <div className="text-xs text-gray-500">Economy</div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="lg:col-span-3">
                      <button
                        onClick={addAnotherCity}
                        className="w-full border-2 border-blue-500 text-blue-500 rounded-lg p-2 sm:p-3 font-semibold hover:bg-blue-50 transition text-sm sm:text-base"
                      >
                        + Add Another City
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

          {tripType === "oneway" && (
            <>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 items-start sm:items-center mb-4">
                <div className="flex flex-col w-full sm:w-auto flex-1">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize">
                    departure from
                  </div>
                  <div className="capitalize text-xl sm:text-2xl lg:text-3xl font-semibold">
                    new delhi
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    DEL, Indira Gandhi Internation..
                  </div>
                </div>

                <div className="hidden sm:block self-end pb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 16L3 12M3 12L7 8M3 12H21M17 8L21 12M21 12L17 16" stroke="#666" strokeWidth="2"/>
                  </svg>
                </div>

                <div className="flex flex-col w-full sm:w-auto flex-1">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize">
                    going to
                  </div>
                  <div className="capitalize text-xl sm:text-2xl lg:text-3xl font-semibold">
                    mumbai
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    BOM, Chhatrapati Shivaji Interna...
                  </div>
                </div>

                <div className="flex flex-col w-full sm:w-auto">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize flex items-center gap-1">
                    Departure Date
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="capitalize">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">{day} </span>
                    <span className="text-lg sm:text-xl lg:text-2xl">
                      {month}'{year}
                    </span>
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    {weekday}
                  </div>
                </div>

                <div className="flex flex-col w-full sm:w-auto pb-2 border-b border-zinc-300">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize flex items-center gap-1">
                    return Date
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <button className="text-blue-500 text-xs sm:text-sm text-left">
                    Book round trip to save extra
                  </button>
                </div>

                <div className="flex flex-col w-full sm:w-auto">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize">
                    travellers & class
                  </div>
                  <div className="capitalize text-xl sm:text-2xl lg:text-3xl font-semibold">
                    1 traveller
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    economy
                  </div>
                </div>

                <button className="bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-red-700 transition shadow-lg w-full sm:w-auto mt-2 sm:mt-0 self-end">
                  Search
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap w-full">
                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="regular"
                      checked={fareType === "regular"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "regular" ? "text-red-600" : "text-gray-700"}`}>
                        Regular
                      </div>
                      <div className="text-xs text-gray-500">Regular Fares</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="student"
                      checked={fareType === "student"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "student" ? "text-red-600" : "text-gray-700"}`}>
                        Student
                      </div>
                      <div className="text-xs text-gray-500">Extra Baggage</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="armed"
                      checked={fareType === "armed"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "armed" ? "text-red-600" : "text-gray-700"}`}>
                        Armed Forces
                      </div>
                      <div className="text-xs text-gray-500">Extra Discount</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="senior"
                      checked={fareType === "senior"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "senior" ? "text-red-600" : "text-gray-700"}`}>
                        Senior Citizen
                      </div>
                      <div className="text-xs text-gray-500">Extra Discount</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer sm:ml-auto">
                    <input
                      type="checkbox"
                      checked={nonStop}
                      onChange={(e) => setNonStop(e.target.checked)}
                      className="w-5 h-5 accent-red-600"
                    />
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Non-Stop Flights
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}

          {tripType === "round" && (
            <>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 items-start sm:items-center mb-4">
                <div className="flex flex-col w-full sm:w-auto flex-1">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize">
                    departure from
                  </div>
                  <div className="capitalize text-xl sm:text-2xl lg:text-3xl font-semibold">
                    new delhi
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    DEL, Indira Gandhi Internation..
                  </div>
                </div>

                <div className="hidden sm:block self-end pb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 16L3 12M3 12L7 8M3 12H21M17 8L21 12M21 12L17 16" stroke="#666" strokeWidth="2"/>
                  </svg>
                </div>

                <div className="flex flex-col w-full sm:w-auto flex-1">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize">
                    going to
                  </div>
                  <div className="capitalize text-xl sm:text-2xl lg:text-3xl font-semibold">
                    mumbai
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    BOM, Chhatrapati Shivaji Interna...
                  </div>
                </div>

                <div className="flex flex-col w-full sm:w-auto">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize flex items-center gap-1">
                    Departure Date
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="capitalize">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">{day} </span>
                    <span className="text-lg sm:text-xl lg:text-2xl">
                      {month}'{year}
                    </span>
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    {weekday}
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-auto pb-2 border-b border-zinc-300">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize flex items-center gap-1">
                    return Date
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <button className="text-blue-500 text-xs sm:text-sm text-left">
                    Book round trip to save extra
                  </button>
                </div>

                <div className="flex flex-col w-full sm:w-auto">
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize">
                    travellers & class
                  </div>
                  <div className="capitalize text-xl sm:text-2xl lg:text-3xl font-semibold">
                    1 traveller
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm capitalize border-b pb-2 border-zinc-300">
                    economy
                  </div>
                </div>

                <button className="bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-red-700 transition shadow-lg w-full sm:w-auto mt-2 sm:mt-0 self-end">
                  Search
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap w-full">
                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="regular"
                      checked={fareType === "regular"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "regular" ? "text-red-600" : "text-gray-700"}`}>
                        Regular
                      </div>
                      <div className="text-xs text-gray-500">Regular Fares</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="student"
                      checked={fareType === "student"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "student" ? "text-red-600" : "text-gray-700"}`}>
                        Student
                      </div>
                      <div className="text-xs text-gray-500">Extra Baggage</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="armed"
                      checked={fareType === "armed"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "armed" ? "text-red-600" : "text-gray-700"}`}>
                        Armed Forces
                      </div>
                      <div className="text-xs text-gray-500">Extra Discount</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer px-2 sm:px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
                    <input
                      type="radio"
                      name="fareType"
                      value="senior"
                      checked={fareType === "senior"}
                      onChange={(e) => setFareType(e.target.value)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <div>
                      <div className={`font-medium text-sm ${fareType === "senior" ? "text-red-600" : "text-gray-700"}`}>
                        Senior Citizen
                      </div>
                      <div className="text-xs text-gray-500">Extra Discount</div>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer sm:ml-auto">
                    <input
                      type="checkbox"
                      checked={nonStop}
                      onChange={(e) => setNonStop(e.target.checked)}
                      className="w-5 h-5 accent-red-600"
                    />
                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      Non-Stop Flights
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadPop;