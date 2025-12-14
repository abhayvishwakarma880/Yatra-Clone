import React from 'react';
import { ArrowRight } from 'lucide-react';

const Check = () => {
  return (
    <div className="w-full px-3 sm:px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-3 lg:gap-4 w-full md:w-[95%] mx-auto mt-6 sm:mt-8 md:mt-10">
        <div className="border w-full md:w-[49%] flex justify-between items-center px-4 sm:px-5 md:px-3 lg:px-5 py-4 sm:py-5 rounded-lg bg-white cursor-pointer transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="text-sm sm:text-base md:text-[15px] lg:text-[17px] font-semibold flex items-center gap-2 flex-wrap">
            <span className="whitespace-nowrap">Check</span>
            <img 
              className="h-5 sm:h-6 mt-0 sm:mt-1" 
              src="https://www.yatra.com/react-home/_next/image?url=%2Freact-home%2Fimages%2Findigo-logo.png&w=256&q=75" 
              alt="Indigo Logo" 
            />
            <span>Flights Cancellations</span>
          </div>
          <div className="shrink-0 ml-2 sm:ml-3">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Second Card */}
        <div className="border w-full md:w-[49%] flex justify-between items-center px-4 sm:px-5 md:px-3 lg:px-5 py-4 sm:py-5 rounded-lg bg-white cursor-pointer transform hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="text-sm sm:text-base md:text-[15px] lg:text-[17px] font-semibold">
            Claim Refund for Cancelled Indigo Flights
          </div>
          <div className="shrink-0 ml-2 sm:ml-3">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;