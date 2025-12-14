import React from 'react';
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5';

export default function YatraApp() {
  return (
    <div className="w-[95%] mx-auto bg-white shadow-2xl mt-10 rounded-2xl px-4">
  <div className="mx-auto rounded-3xl overflow-hidden">

    <div className="grid md:grid-cols-2 gap-6 items-stretch p-6 md:p-10 h-auto md:h-[460px]">

      <div className="flex justify-center md:justify-start h-full">
        <div className="relative h-full w-full max-w-[320px] md:max-w-[360px] flex items-end">
          <img
            className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-300"
            src="https://www.yatra.com/react-home/_next/image?url=%2Freact-home%2Fimages%2FdownloadApp%2FmobileApp.webp&w=3840&q=75"
            alt="Yatra Mobile App"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center h-full text-center md:text-left space-y-6">
        <div>
          <p className="text-gray-500 text-xs md:text-sm font-medium mb-2 tracking-widest uppercase">
            Try on Mobile
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Download our app for unbeatable perks!
          </h2>
        </div>

        <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
          Get exclusive deals, instant booking, and faster checkouts — all from your phone.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
          <div className="w-28 h-28 md:w-32 md:h-32 bg-white p-1 rounded-lg shadow-lg border border-gray-100 shrink-0">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.yatra.com/mobile-app"
              alt="QR Code"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          <div className="space-y-3">
            <a className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition">
              <IoLogoGooglePlaystore className="w-6 h-6"/>
              <div className="text-left leading-tight">
                <p className="text-[10px] opacity-90">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>

            <a className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition">
              <IoLogoApple className="w-6 h-6"/>
              <div className="text-left leading-tight">
                <p className="text-[10px] opacity-90">DOWNLOAD ON THE</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Available on iOS & Android
        </div>
      </div>

    </div>
  </div>
</div>

  );
}
