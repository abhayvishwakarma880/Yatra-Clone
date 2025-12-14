import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import HeadPop from './HeadPop'

const Header = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 gap-4'>
        <div className='w-full md:w-auto flex justify-center md:justify-start'>
          <img src="https://www.yatra.com/react-home/_next/static/media/logo.04fb10f6.svg" alt="" className='h-8 md:h-auto' />
        </div>
        <div className='w-full md:w-auto overflow-x-auto'>
          <ul className='flex items-center gap-2 md:gap-3 justify-center md:justify-end flex-nowrap min-w-max md:min-w-0'>
            <li className='hidden sm:block'><img src="https://www.yatra.com/react-home/_next/static/media/yatraPrimeBanner.887fd894.svg" alt="" className='h-6 md:h-auto' /></li>
            <li><NavLink className='border text-[11px] md:text-[13px] bg-white p-1 rounded-2xl flex items-center gap-1 font-semibold capitalize whitespace-nowrap'><img src="https://www.yatra.com/react-home/_next/static/media/yatra-business.a0945294.svg" alt="" className='h-4 md:h-auto' /> <span className='hidden sm:inline'>corporates</span><FaAngleDown className='hidden sm:inline' /></NavLink></li>
            <li className='hidden lg:block'><NavLink className='border text-[13px] bg-white p-1 rounded-2xl flex items-center gap-1 font-semibold capitalize'><img src="https://www.yatra.com/react-home/_next/static/media/yatra-agent.87280995.svg" alt="" /> for travel agents</NavLink></li>
            <li><NavLink className='p-1 text-[11px] md:text-[13px] flex items-center gap-1 font-semibold capitalize'><IoCallOutline className='border rounded-full h-6 w-6 md:h-8 md:w-8 p-1 bg-white' /><span className='hidden sm:inline'>Support</span><FaAngleDown className='hidden sm:inline' /></NavLink></li>
            <li><NavLink className='border rounded bg-[#D60F0F] text-white px-2 py-1 flex items-center gap-1 font-semibold capitalize text-[11px] md:text-[13px] whitespace-nowrap'>login / signup</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='mt-4 md:mt-12'>
        <HeadPop />
      </div>
    </div>
  )
}

export default Header