import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={()=>navigate(-1)} className='w-10 h-10 bg-white/[0.06] p-2.5 rounded-full border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.28)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-white/[0.12] hover:border-white/15 hover:scale-105' src={assets.arrow_left} alt="" />
          <img onClick={()=>navigate(+1)} className='w-10 h-10 bg-white/[0.06] p-2.5 rounded-full border border-white/10 shadow-[0_6px_18px_rgba(0,0,0,0.28)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-white/[0.12] hover:border-white/15 hover:scale-105' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-3'>
          <p className='bg-white text-black text-[14px] font-semibold px-5 py-2 rounded-full hidden md:block cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-white/90'>Explore Premium</p>
          <p className='bg-white/[0.06] border border-white/10 py-2 px-4 rounded-full text-[14px] text-white cursor-pointer backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/15'>Install App</p>
          <p className='bg-gradient-to-br from-fuchsia-400 to-violet-500 text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer font-bold shadow-[0_8px_20px_rgba(168,85,247,0.35)]'>O</p>
        </div>
      </div>

      <div className='flex items-center gap-3 mt-6 flex-wrap'>
        <p className='bg-white text-black px-4 py-2 rounded-full text-sm font-semibold cursor-pointer'>All</p>
        <p className='bg-white/[0.06] border border-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-medium cursor-pointer backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:text-white'>Music</p>
        <p className='bg-white/[0.06] border border-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-medium cursor-pointer backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:text-white'>Podcast</p>
      </div>
    </>
  )
}

export default Navbar