import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name, desc, id}) => {

  const navigate = useNavigate()
   
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className='group min-w-45 p-3 rounded-2xl cursor-pointer bg-white/[0.03] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/15 hover:shadow-[0_18px_40px_rgba(0,0,0,0.38)]'
    >
      <img
        className='rounded-xl w-full aspect-square object-cover shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out group-hover:scale-[1.02]'
        src={image}
        alt=""
      />
      <p className='font-semibold text-[15px] tracking-tight text-white mt-3 mb-1 truncate'>{name}</p>
      <p className='text-slate-300/85 text-sm leading-5 line-clamp-2'>{desc}</p>
    </div>
  )
}

export default AlbumItem