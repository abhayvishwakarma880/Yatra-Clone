import React, { useState } from 'react';
import { Plane, Hotel, Palmtree, Bus, Train, Car, ChevronDown, Sparkles } from 'lucide-react';

export default function cl() {
  const [tripType, setTripType] = useState('oneway');
  const [fareType, setFareType] = useState('regular');
  const [nonStop, setNonStop] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-orange-50 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-md relative">
              <Plane className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-gray-800">Flights</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">Upto 19% Off</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition relative">
              <Hotel className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-600">Hotels</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">Upto 50% Off</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition">
              <Palmtree className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-600">Holidays</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition">
              <Bus className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-600">Bus</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition">
              <Train className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-600">Trains</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition">
              <Car className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-600">Cabs</span>
            </button>
          </div>

          <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition border border-purple-200">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="font-semibold text-gray-800">Diya AI</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex gap-8 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="tripType"
                  value="oneway"
                  checked={tripType === 'oneway'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-5 h-5 accent-red-600"
                />
              </div>
              <span className={`font-medium ${tripType === 'oneway' ? 'text-red-600' : 'text-gray-600'}`}>One Way</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="tripType"
                  value="round"
                  checked={tripType === 'round'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-5 h-5 accent-red-600"
                />
              </div>
              <span className={`font-medium ${tripType === 'round' ? 'text-red-600' : 'text-gray-600'}`}>Round Trip</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="tripType"
                  value="multi"
                  checked={tripType === 'multi'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-5 h-5 accent-red-600"
                />
              </div>
              <span className={`font-medium ${tripType === 'multi' ? 'text-red-600' : 'text-gray-600'}`}>Multi City</span>
            </label>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
            <div className="lg:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block">Departure From</label>
              <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-red-500 transition">
                <div className="font-bold text-xl text-gray-900">New Delhi</div>
                <div className="text-xs text-gray-500 truncate">DEL, Indira Gandhi Internati...</div>
              </div>
            </div>

            <div className="hidden lg:flex items-end justify-center pb-3">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>

            <div className="lg:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block">Going To</label>
              <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-red-500 transition">
                <div className="font-bold text-xl text-gray-900">Mumbai</div>
                <div className="text-xs text-gray-500 truncate">BOM, Chhatrapati Shivaji Int...</div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-1">
                Departure Date <ChevronDown className="w-3 h-3" />
              </label>
              <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-red-500 transition">
                <div className="font-bold text-xl text-gray-900">11 Dec' 25</div>
                <div className="text-xs text-gray-500">Thursday</div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-1">
                Return Date <ChevronDown className="w-3 h-3" />
              </label>
              <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-red-500 transition">
                <div className="text-sm text-blue-600 font-medium">Book Round Trip</div>
                <div className="text-xs text-gray-500">to save extra</div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
            <div className="lg:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block flex items-center gap-1">
                Travellers & Class <ChevronDown className="w-3 h-3" />
              </label>
              <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-red-500 transition">
                <div className="font-bold text-xl text-gray-900">1 Traveller</div>
                <div className="text-xs text-gray-500">Economy</div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-3"></div>

            <div className="lg:col-span-1 flex items-end">
              <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg">
                Search
              </button>
            </div>
          </div>
    
          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
              <input
                type="radio"
                name="fareType"
                value="regular"
                checked={fareType === 'regular'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 accent-red-600"
              />
              <div>
                <div className={`font-medium ${fareType === 'regular' ? 'text-red-600' : 'text-gray-700'}`}>Regular</div>
                <div className="text-xs text-gray-500">Regular Fares</div>
              </div>
            </label>

            <label className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
              <input
                type="radio"
                name="fareType"
                value="student"
                checked={fareType === 'student'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 accent-red-600"
              />
              <div>
                <div className={`font-medium ${fareType === 'student' ? 'text-red-600' : 'text-gray-700'}`}>Student</div>
                <div className="text-xs text-gray-500">Extra Baggage</div>
              </div>
            </label>

            <label className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
              <input
                type="radio"
                name="fareType"
                value="armed"
                checked={fareType === 'armed'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 accent-red-600"
              />
              <div>
                <div className={`font-medium ${fareType === 'armed' ? 'text-red-600' : 'text-gray-700'}`}>Armed Forces</div>
                <div className="text-xs text-gray-500">Extra Discount</div>
              </div>
            </label>

            <label className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 hover:border-red-500 transition">
              <input
                type="radio"
                name="fareType"
                value="senior"
                checked={fareType === 'senior'}
                onChange={(e) => setFareType(e.target.value)}
                className="w-4 h-4 accent-red-600"
              />
              <div>
                <div className={`font-medium ${fareType === 'senior' ? 'text-red-600' : 'text-gray-700'}`}>Senior Citizen</div>
                <div className="text-xs text-gray-500">Extra Discount</div>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer ml-auto">
              <input
                type="checkbox"
                checked={nonStop}
                onChange={(e) => setNonStop(e.target.checked)}
                className="w-5 h-5 accent-red-600"
              />
              <span className="font-medium text-gray-700">Non-Stop Flights</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}





