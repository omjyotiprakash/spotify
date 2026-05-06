import React from 'react'
import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-white/[0.04] border border-white/10 backdrop-blur-xl h-[15%] rounded-2xl flex flex-col justify-around shadow-[0_10px_30px_rgba(0,0,0,0.24)]'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-6 lg:pl-7 cursor-pointer rounded-xl py-2 transition-all duration-300 hover:bg-white/[0.06]'>
          <img className='w-5 h-5 opacity-90' src={assets.home_icon} alt="" />
          <p className='font-semibold text-sm tracking-tight'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-6 lg:pl-7 cursor-pointer rounded-xl py-2 transition-all duration-300 hover:bg-white/[0.06]'>
          <img className='w-5 h-5 opacity-90' src={assets.search_icon} alt="" />
          <p className='font-semibold text-sm tracking-tight'>Search</p>
        </div>
      </div>

      <div className='bg-white/[0.04] border border-white/10 backdrop-blur-xl h-[85%] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.24)]'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3 text-white/90'>
            <img className='w-7 h-7 opacity-90' src={assets.stack_icon} alt="" />
            <p className='font-semibold text-sm tracking-tight'>Your Library</p>
          </div>
          <div className='flex items-center gap-3 opacity-75'>
            <img className='w-5 h-5 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110' src={assets.arrow_icon} alt="" />
            <img className='w-5 h-5 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110' src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className='p-4 bg-white/[0.05] border border-white/10 m-2 rounded-2xl font-semibold flex flex-col items-start justify-start gap-1 pl-4 shadow-[0_8px_24px_rgba(0,0,0,0.20)]'>
          <h1 className='text-sm font-semibold tracking-tight text-white'>Create your first playlist</h1>
          <p className='font-light text-sm text-white/65 leading-5'>It's easy, we'll help you</p>
          <button className='px-4 py-2 bg-white text-[14px] font-semibold text-black rounded-full mt-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/90'>Create Playlist</button>
        </div>

        <div className='p-4 bg-white/[0.05] border border-white/10 m-2 rounded-2xl font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 shadow-[0_8px_24px_rgba(0,0,0,0.20)]'>
          <h1 className='text-sm font-semibold tracking-tight text-white'>Let's find some podcast to follow</h1>
          <p className='font-light text-sm text-white/65 leading-5'>We'll keep you update on new episode</p>
          <button className='px-4 py-2 bg-white text-[14px] font-semibold text-black rounded-full mt-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/90'>Browse Podcast</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar