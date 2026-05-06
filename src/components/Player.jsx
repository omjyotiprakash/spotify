import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

  const {seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong} = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-gradient-to-t from-black/95 via-black/90 to-black/80 border-t border-white/10 backdrop-blur-xl flex justify-between items-center text-white px-4 lg:px-6 shadow-[0_-10px_30px_rgba(0,0,0,0.35)]'>
      <div className='hidden lg:flex items-center gap-4 min-w-0'>
        <img className='w-12 h-12 rounded-xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10' src={track.image} alt="" />
        <div className='min-w-0'>
          <p className='text-sm font-semibold truncate'>{track.name}</p>
          <p className='text-xs text-white/55 truncate mt-0.5'>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 m-auto'>
        <div className='flex items-center gap-5'>
          <img className='w-4 h-4 cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className='w-4 h-4 cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.prev_icon} alt="" />
          {
            playStatus 
            ? <img onClick={pause} className='w-5 h-5 cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.pause_icon} alt="" />
            : <img onClick={play} className='w-5 h-5 cursor-pointer opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.play_icon} alt="" />
          }
          <img onClick={next} className='w-4 h-4 cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.next_icon} alt="" />
          <img className='w-4 h-4 cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.loop_icon} alt="" />
        </div>

        <div className='flex items-center gap-4 text-xs text-white/60 tabular-nums'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-125 bg-white/15 rounded-full cursor-pointer h-1 overflow-hidden shadow-inner'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.35)]' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-3 opacity-75'>
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.plays_icon} alt="" />
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.mic_icon} alt="" />
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.queue_icon} alt="" />
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.speaker_icon} alt="" />
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.volume_icon} alt="" />
        <div className='w-20 bg-white/20 h-1 rounded-full overflow-hidden'></div>
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.mini_player_icon} alt="" />
        <img className='w-4 h-4 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110 active:scale-95' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player