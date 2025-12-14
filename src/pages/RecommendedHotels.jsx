import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";

export default function RecommendedHotels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // show 3 cards in one row

  const hotels = [
    {
      id: 1,
      name: "Essentia Luxury Reso...",
      location: "Udaipur",
      price: "5,442",
      rating: 5.0,
      imageUrl:
        "https://avatars.mds.yandex.net/get-ydo/1540809/2a0000016a39e4c1f530ba5562a9d93c175f/diploma",
    },
    {
      id: 2,
      name: "Deltin Suites",
      location: "Goa",
      price: "6,899",
      rating: 5.0,
      imageUrl:
        "https://cache.marriott.com/is/image/marriotts7prod/de-ykfdg-standard-king-42398:Classic-Hor?wid=540&fit=constrain",
    },
    {
      id: 3,
      name: "Sahara Star Hotel",
      location: "Mumbai",
      price: "16,520",
      rating: 5.0,
      imageUrl:
        "https://theonion.com/wp-content/uploads/2014/07/rceognedfwafjdbj4njt.jpg",
    },
    {
      id: 4,
      name: "The Grand Palace",
      location: "Jaipur",
      price: "8,300",
      rating: 4.8,
      imageUrl:
        "https://posta-magazine.ru/wp-content/uploads/old/images/stories/flexicontent2/08_easter_2017_hotels_Posta-Magazine.jpg",
    },
    {
      id: 5,
      name: "Oceanview Resort",
      location: "Goa",
      price: "9,150",
      rating: 4.9,
      imageUrl:
        "https://avatars.mds.yandex.net/get-altay/15232272/2a00000193a5de9d8d6ef542a21b57395145/XXL_height",
    },
  ];

  const maxIndex = Math.max(0, hotels.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const cardWidthPercent = 100 / visibleCount;
  const translateXPercent = currentIndex * cardWidthPercent;

  return (
    <div className="mt-10 bg-white rounded-2xl py-10 px-4 w-[95%] mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Recommended Hotels
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full border-2 border-gray-300 transition ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:border-gray-400 hover:bg-white"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`p-2 rounded-full border-2 border-gray-300 transition ${
                currentIndex === maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:border-gray-400 hover:bg-white"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${(hotels.length * 100) / visibleCount}%`,
              transform: `translateX(-${translateXPercent}%)`,
            }}
          >
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="p-2"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-64 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Details (compact) */}
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded">
                        <Star className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-900">
                          {hotel.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1 text-blue-600">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">
                          {hotel.location}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{hotel.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center gap-2 mt-4">
          {Array.from({
            length: Math.max(1, hotels.length - visibleCount + 1),
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === i ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
