import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import HeadPop from "./HeadPop";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          {/* <img src="https://www.yatra.com/react-home/_next/static/media/logo.04fb10f6.svg" alt="" className='h-8 md:h-auto' /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="34"
            viewBox="0 0 78 34"
            fill="none"
          >
            <path
              d="M47.8536 23.5951C48.6466 23.457 49.4266 24.1348 49.5956 25.0886C49.7646 26.0549 49.2706 26.946 48.4776 27.084H48.4516C47.6196 27.2346 46.7876 27.3099 45.9426 27.3225C44.1876 27.3225 42.7706 26.9209 41.6656 26.0926C40.2486 25.0509 39.5076 23.3943 39.5076 21.3361V2.20981C39.5076 1.4317 40.3266 0.804199 41.3406 0.804199C42.3546 0.804199 43.1736 1.4317 43.1736 2.20981V21.3361C43.1736 22.2773 43.4206 22.9299 43.9016 23.2939C44.3306 23.6202 45.3966 24.0218 47.8146 23.6076L47.8536 23.5951Z"
              fill="#D60F0F"
            />
            <path
              d="M10.8036 25.6531C10.1406 25.6531 9.51659 24.7119 9.19159 24.0969C7.48859 20.8967 6.18859 18.349 5.14859 16.3033C3.02959 12.1242 1.88559 10.1287 0.923593 9.41335C-0.0254067 8.698 -0.220406 7.78184 0.234593 6.96609C0.715593 6.13778 1.80759 5.83658 2.66559 6.30093C2.67859 6.30093 2.67859 6.31349 2.69159 6.31349C4.73259 7.43044 5.79859 9.5263 8.45059 14.7471C9.47759 16.7677 10.7516 19.2902 12.4286 22.4278C12.8446 23.2059 13.1306 24.7746 12.4156 25.2892L10.8036 25.6531Z"
              fill="#D60F0F"
            />
            <path
              d="M53.717 18.0729C53.717 13.4294 49.817 9.66436 45.007 9.66436H37.298C36.492 9.66436 35.842 8.87371 35.842 7.8948C35.842 6.9159 36.492 6.12524 37.298 6.12524H45.007C51.845 6.12524 57.383 11.4716 57.383 18.0729V25.9418C57.383 26.7199 56.564 27.3474 55.55 27.3474C54.536 27.3474 53.717 26.7199 53.717 25.9418V18.0729Z"
              fill="#D60F0F"
            />
            <path
              d="M31.747 20.2946V20.4829C31.747 22.5034 30.057 23.8086 27.392 23.8086C24.727 23.8086 23.024 22.5034 23.024 20.4954C23.024 18.4748 24.74 17.1696 27.392 17.1696H27.548C30.317 17.1696 35.088 18.3995 35.413 18.4999V15.1365C33.645 14.5341 30.824 13.6305 27.548 13.6305H27.392C22.478 13.6305 19.358 16.7053 19.358 20.4954C19.358 24.2855 22.478 27.3477 27.392 27.3477C32.306 27.3477 35.426 24.2855 35.426 20.4954V20.3197L35.413 12.9779C35.413 9.1878 31.63 6.12559 27.392 6.12559L26.69 6.11304C21.1 6.11304 16.732 7.56884 13.534 14.6973C13.274 15.2746 13.027 15.8519 12.78 16.4292L12.754 16.5045C11.987 18.3242 11.545 19.6671 10.44 22.1269C8.37301 26.7328 6.52701 29.4185 3.70601 29.5691C2.18501 29.6569 1.80801 30.6358 1.99001 31.6147C2.17201 32.5937 2.82201 33.1961 3.70601 33.1961C8.29501 33.1961 11.168 29.1173 13.911 23.3066L13.95 23.2313C14.366 22.2901 14.769 21.3112 15.185 20.2821C15.731 18.9141 16.303 17.4959 16.927 16.1029C19.371 10.6562 22.14 9.65215 26.703 9.65215H27.405C29.368 9.65215 31.76 10.9574 31.76 12.9654V20.2569"
              fill="#D60F0F"
            />
            <path
              d="M74.334 20.2943V20.4825C74.334 22.5031 72.618 23.8083 69.966 23.8083C67.314 23.8083 65.598 22.5031 65.598 20.4951C65.598 18.4745 67.314 17.1693 69.966 17.1693H70.122C72.891 17.1693 77.662 18.3992 77.987 18.4996V15.1362C76.219 14.5338 73.385 13.6302 70.122 13.6302H69.966C65.052 13.6302 61.932 16.7049 61.932 20.4951C61.932 24.2852 65.052 27.3474 69.966 27.3474C74.88 27.3474 78 24.2852 78 20.4951V20.3194L77.987 12.9776C77.987 9.18746 74.204 6.13779 69.966 6.13779C69.966 6.13779 68.653 6.12524 68.38 6.12524C59.358 6.12524 53.729 11.8104 53.729 19.6668H57.395C57.395 13.7682 61.386 9.66436 68.38 9.66436C68.705 9.66436 69.719 9.67691 69.719 9.67691C72.345 9.67691 74.347 10.9696 74.347 12.9776L74.334 20.2943Z"
              fill="#D60F0F"
            />
          </svg>
        </div>
        <div className="w-full md:w-auto overflow-x-auto">
          <ul className="flex items-center gap-2 md:gap-3 justify-center md:justify-end flex-nowrap min-w-max md:min-w-0">
            <li className="hidden sm:block">
              <img
                src="https://www.yatra.com/react-home/_next/static/media/yatraPrimeBanner.887fd894.svg"
                alt=""
                className="h-6 md:h-auto"
              />
            </li>
            <li>
              <NavLink className="border text-[11px] md:text-[13px] bg-white p-1 rounded-2xl flex items-center gap-1 font-semibold capitalize whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
<path d="M10.9573 11.875H25.0586C25.4674 11.875 25.8594 12.0374 26.1485 12.3264C26.4376 12.6155 26.6 13.0076 26.6 13.4164V26.4836C26.6 26.8924 26.4376 27.2845 26.1485 27.5735C25.8594 27.8626 25.4674 28.025 25.0586 28.025H5.34133C4.93253 28.025 4.54048 27.8626 4.25142 27.5735C3.96235 27.2845 3.79996 26.8924 3.79996 26.4836V11.866" stroke="#262626" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.54996 28.0251V12.0176" stroke="#262626" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.85 28.025V11.875" stroke="#262626" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.89424 11.875H19.4428V9.83255C19.4428 9.66413 19.4096 9.49736 19.3451 9.34176C19.2807 9.18616 19.1862 9.04478 19.0671 8.92568C18.948 8.80659 18.8066 8.71212 18.651 8.64767C18.4954 8.58322 18.3287 8.55005 18.1603 8.55005H12.2384C11.9788 8.55019 11.7253 8.62914 11.5115 8.77646C11.2976 8.92379 11.1336 9.13254 11.041 9.37512" stroke="#262626" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6 1.42505V2.37505" stroke="#D60F0F" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6 4.27515V5.22515" stroke="#D60F0F" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.7 3.32495H25.65" stroke="#D60F0F" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.55 3.32495H28.5" stroke="#D60F0F" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5375 5.2251C14.1933 5.2251 14.725 4.69344 14.725 4.0376C14.725 3.38176 14.1933 2.8501 13.5375 2.8501C12.8816 2.8501 12.35 3.38176 12.35 4.0376C12.35 4.69344 12.8816 5.2251 13.5375 5.2251Z" stroke="#1C9FE2" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.9484 10.2583C28.9488 10.4462 28.8933 10.6301 28.7892 10.7866C28.685 10.943 28.5367 11.0651 28.3632 11.1372C28.1896 11.2094 27.9986 11.2285 27.8142 11.192C27.6298 11.1556 27.4603 11.0652 27.3273 10.9324C27.1942 10.7996 27.1036 10.6304 27.0668 10.446C27.03 10.2617 27.0487 10.0706 27.1205 9.89692C27.1924 9.72323 27.3142 9.57475 27.4704 9.47029C27.6267 9.36582 27.8104 9.31006 27.9984 9.31006C28.25 9.31029 28.4912 9.41021 28.6693 9.58794C28.8473 9.76566 28.9477 10.0067 28.9484 10.2583Z" fill="#1C9FE2"/>
<path d="M5.7061 2.62805C5.70575 2.81586 5.64974 2.99936 5.54514 3.15535C5.44054 3.31135 5.29205 3.43283 5.11842 3.50446C4.9448 3.57609 4.75385 3.59465 4.56968 3.5578C4.38552 3.52094 4.21641 3.43032 4.08373 3.29739C3.95105 3.16446 3.86074 2.99519 3.82423 2.81095C3.78772 2.62672 3.80664 2.4358 3.87859 2.26231C3.95055 2.08882 4.07231 1.94056 4.2285 1.83625C4.38469 1.73194 4.56829 1.67627 4.7561 1.67627C4.88101 1.67627 5.00469 1.7009 5.12007 1.74875C5.23544 1.79661 5.34025 1.86674 5.42849 1.95515C5.51672 2.04355 5.58666 2.14849 5.6343 2.26395C5.68194 2.37942 5.70634 2.50314 5.7061 2.62805Z" fill="#D60F0F"/>
<path d="M18.05 11.875V16.15" stroke="#262626" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.05 16.3079L16.15 17.3111V20.9002V22.3252H19.95V20.9002V17.3111L18.05 16.3079Z" stroke="#262626" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.95 20.9001H16.15" stroke="#262626" stroke-width="0.95" stroke-linejoin="round"/>
</svg>
                <span className="hidden sm:inline">corporates</span>
                <FaAngleDown className="hidden sm:inline" />
              </NavLink>
            </li>
            <li className="hidden lg:block">
              <NavLink className="border text-[13px] bg-white p-1 rounded-2xl flex items-center gap-1 font-semibold capitalize">
                <img
                  src="https://www.yatra.com/react-home/_next/static/media/yatra-agent.87280995.svg"
                  alt=""
                />{" "}
                for travel agents
              </NavLink>
            </li>
            <li>
              <NavLink className="p-1 text-[11px] md:text-[13px] flex items-center gap-1 font-semibold capitalize">
                <IoCallOutline className="border rounded-full h-6 w-6 md:h-8 md:w-8 p-1 bg-white" />
                <span className="hidden sm:inline">Support</span>
                <FaAngleDown className="hidden sm:inline" />
              </NavLink>
            </li>
            <li>
              <NavLink className="border rounded bg-[#D60F0F] text-white px-2 py-1 flex items-center gap-1 font-semibold capitalize text-[11px] md:text-[13px] whitespace-nowrap">
                login / signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 md:mt-12">
        <HeadPop />
      </div>
    </div>
  );
};

export default Header;
