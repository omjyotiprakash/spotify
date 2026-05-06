import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { useEffect, useRef } from 'react';
import { albumsData } from '../assets/assets';

const Display = () => {
 
  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.slice(-1) : ""
  const bgColor = albumsData[Number(albumId)].bgColor
  
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
      displayRef.current.style.background = `#121212`
    }
  })

  return (
  <div
    ref={displayRef}
    className='w-full m-2 px-8 pt-6 pb-8 rounded-[28px] bg-white/[0.045] text-white overflow-auto border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:w-[75%] lg:ml-0'
  >
    <Routes>
      <Route path='/' element = {<DisplayHome/>} />
      <Route path='/album/:id' element = {<DisplayAlbum/>} />
    </Routes>
  </div>
)
}

export default Display
