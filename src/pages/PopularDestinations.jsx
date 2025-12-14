import React, { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function PopularDestinations() {
  const [domesticCity, setDomesticCity] = useState('Delhi');
  const [internationalCity, setInternationalCity] = useState('Kolkata');
  const [domesticTripType, setDomesticTripType] = useState('Return');
  const [internationalTripType, setInternationalTripType] = useState('Return');
  const [showDomesticCityDropdown, setShowDomesticCityDropdown] = useState(false);
  const [showInternationalCityDropdown, setShowInternationalCityDropdown] = useState(false);
  const [showDomesticTripDropdown, setShowDomesticTripDropdown] = useState(false);
  const [showInternationalTripDropdown, setShowInternationalTripDropdown] = useState(false);

  const [domesticIndex, setDomesticIndex] = useState(0);
  const [internationalIndex, setInternationalIndex] = useState(0);

  const [domesticClicked, setDomesticClicked] = useState(null);
  const [internationalClicked, setInternationalClicked] = useState(null);

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata',
    'Hyderabad', 'Cochin', 'Ahmedabad', 'Pune', 'Trivandrum',
    'Lucknow', 'Amritsar'
  ];

  const domesticDestinations = [
    { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&h=600&fit=crop', price: '9,637' },
    { name: 'Bangalore', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop', price: '11,198' },
    { name: 'Pune', image: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-970030-media_library/original/7c29d231-ef3b-4cad-9488-f9ea4f9dd34b.jpeg?aki_policy=poster', price: '8,249' },
    { name: 'Kolkata', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800&h=600&fit=crop', price: '7,996' },
    { name: 'Hyderabad', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop', price: '8,199' },
    { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop', price: '9,309' },
    { name: 'Chennai', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop', price: '10,645' },
    { name: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1641979664248-932c29d15b7b?w=800&h=600&fit=crop', price: '7,123' },
    { name: 'Lucknow', image: 'https://images.unsplash.com/photo-1541898946401-4a9efec0b2c8?w=800&h=600&fit=crop', price: '6,500' },
    { name: 'Amritsar', image: 'https://images.unsplash.com/photo-1526481280698-4f3b0b3b9d83?w=800&h=600&fit=crop', price: '7,000' },
  ];

  const internationalDestinations = [
    { name: 'Asia', image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop', price: '10,716' },
    { name: 'Top Destination', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop', price: '12,781' },
    { name: 'Middle East', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop', price: '22,450' },
    { name: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop', price: '39,052' },
    { name: 'Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop', price: '45,623' },
    { name: 'Europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop', price: '48,905' },
    { name: 'North America', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop', price: '52,000' },
    { name: 'South America', image: 'https://images.unsplash.com/photo-1505765056267-3a6f5d7a3f2b?w=800&h=600&fit=crop', price: '35,200' },
    { name: 'Caribbean', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', price: '28,500' },
  ];

  const domesticVisible = 7;
  const internationalVisible = 7;

  const domesticMax = Math.max(0, domesticDestinations.length - domesticVisible);
  const internationalMax = Math.max(0, internationalDestinations.length - internationalVisible);

  const domCardW = 100 / domesticVisible;
  const intCardW = 100 / internationalVisible;

  const handleDomesticClick = (key) => {
    setDomesticClicked(key);
    setTimeout(() => setDomesticClicked(null), 180); 
  };

  const handleInternationalClick = (key) => {
    setInternationalClicked(key);
    setTimeout(() => setInternationalClicked(null), 180);
  };

  return (
    <div className="bg-white py-6 px-3 w-[95%] mx-auto mt-8 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3  ">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <button
                  onClick={() => setShowDomesticTripDropdown(!showDomesticTripDropdown)}
                  className="flex  items-center gap-2 text-[#0F6AA3] text-base sm:text-lg md:text-xl lg:text-2xl
  font-semibold hover:text-[#0F6AA3]"
                >
                  {domesticTripType}
                  {showDomesticTripDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showDomesticTripDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 min-w-[140px]">
                    <button onClick={() => { setDomesticTripType('One Way'); setShowDomesticTripDropdown(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50 text-gray-700 text-sm">One Way</button>
                    <button onClick={() => { setDomesticTripType('Return'); setShowDomesticTripDropdown(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50 text-gray-700 text-sm">Return</button>
                  </div>
                )}
              </div>

              <span className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl
 font-semibold">Flights to Popular Domestic Destinations from</span>

              <div className="relative">
                <button
                  onClick={() => setShowDomesticCityDropdown(!showDomesticCityDropdown)}
                  className="flex items-center  gap-2 text-[#0F6AA3] text-base sm:text-lg md:text-xl lg:text-2xl
 font-semibold hover:text-[#0F6AA3]"
                >
                  {domesticCity}
                  {showDomesticCityDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showDomesticCityDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 min-w-[180px] max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                      <button key={city} onClick={() => { setDomesticCity(city); setShowDomesticCityDropdown(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50 text-gray-700 text-sm">{city}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center ml-[80%] sm:ml-0  gap-2">
              <button onClick={() => setDomesticIndex((p) => Math.max(p - 1, 0))} disabled={domesticIndex === 0} className={`p-2 rounded-full border cursor-pointer ${domesticIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
                <ChevronRight className="w-5 h-5 rotate-180 text-gray-700" />
              </button>
              <button onClick={() => setDomesticIndex((p) => Math.min(p + 1, domesticMax))} disabled={domesticIndex === domesticMax} className={`p-2 rounded-full border cursor-pointer ${domesticIndex === domesticMax ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-300"
              style={{
                width: `${(domesticDestinations.length * 100) / domesticVisible}%`,
                transform: `translateX(-${domesticIndex * domCardW}%)`,
              }}
            >
              {domesticDestinations.map((d) => {
                const key = `dom-${d.name}`;
                return (
                  <div key={d.name} className="p-1 flex-none" style={{ width: `${domCardW}%` }}>
                    <div
                      onClick={() => handleDomesticClick(key)}
                      className={`relative rounded-lg overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all duration-200 transform ${domesticClicked === key ? 'scale-[0.95]' : 'scale-100'}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={() => handleDomesticClick(key)}
                    >
                      <div className="aspect-4/5 relative">
                        <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent"></div>

                        <div className="absolute top-2 left-2 right-2 text-center">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl
 font-bold text-white truncate">{d.name}</h3>
                        </div>

                        <div className="absolute bottom-2 left-2 right-2 text-center text-white">
                          <p className="text-[8px] md:text-[20px] lg:text-[20px] sm:text-[20px] mb-0.5 opacity-90">Starting from</p>
                          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl font-extrabold">₹{d.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-3">
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition text-sm">
              See all the locations
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <button onClick={() => setShowInternationalTripDropdown(!showInternationalTripDropdown)} className="flex items-center gap-2 text-blue-700 text-base sm:text-lg md:text-xl lg:text-2xl
 font-semibold hover:text-[#0F6AA3]">
                  {internationalTripType}
                  {showInternationalTripDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showInternationalTripDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 min-w-[140px]">
                    <button onClick={() => { setInternationalTripType('One Way'); setShowInternationalTripDropdown(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50 text-gray-700 text-sm">One Way</button>
                    <button onClick={() => { setInternationalTripType('Return'); setShowInternationalTripDropdown(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50 text-gray-700 text-sm">Return</button>
                  </div>
                )}
              </div>

              <span className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl
 font-semibold">Flights to Popular International Destinations from</span>

              <div className="relative">
                <button onClick={() => setShowInternationalCityDropdown(!showInternationalCityDropdown)} className="flex items-center gap-2 text-blue-700 text-base sm:text-lg md:text-xl lg:text-2xl
 font-semibold hover:text-[#0F6AA3]">
                  {internationalCity}
                  {showInternationalCityDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showInternationalCityDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 min-w-[180px] max-h-60 overflow-y-auto">
                    {cities.map((city) => (
                      <button key={city} onClick={() => { setInternationalCity(city); setShowInternationalCityDropdown(false); }} className="w-full px-3 py-2 text-left hover:bg-blue-50 text-gray-700 text-sm">{city}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center ml-[80%] sm:ml-0 gap-2">
              <button onClick={() => setInternationalIndex((p) => Math.max(p - 1, 0))} disabled={internationalIndex === 0} className={`p-2 rounded-full border ${internationalIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
                <ChevronRight className="w-5 h-5 rotate-180 text-gray-700" />
              </button>
              <button onClick={() => setInternationalIndex((p) => Math.min(p + 1, internationalMax))} disabled={internationalIndex === internationalMax} className={`p-2 rounded-full border ${internationalIndex === internationalMax ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-300"
              style={{
                width: `${(internationalDestinations.length * 100) / internationalVisible}%`,
                transform: `translateX(-${internationalIndex * intCardW}%)`,
              }}
            >
              {internationalDestinations.map((d) => {
                const key = `int-${d.name}`;
                return (
                  <div key={d.name} className="p-1 flex-none" style={{ width: `${intCardW}%` }}>
                    <div
                      onClick={() => handleInternationalClick(key)}
                      className={`relative rounded-lg overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all duration-200 transform ${internationalClicked === key ? 'scale-[0.95]' : 'scale-100'}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={() => handleInternationalClick(key)}
                    >
                      <div className="aspect-4/5 relative">
                        <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent"></div>

                        <div className="absolute top-2 left-2 right-2 text-center">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl
 font-bold text-white truncate">{d.name}</h3>
                        </div>

                        <div className="absolute bottom-2 left-2 right-2 text-center text-white">
                          <p className="text-[8px] md:text-[20px] lg:text-[20px] sm:text-[20px] mb-0.5 opacity-90">Starting from</p>
                          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl font-extrabold">₹{d.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-3">
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition text-sm">
              See all the locations
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
