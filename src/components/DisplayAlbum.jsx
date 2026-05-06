import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/assets"
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {

  const {id} = useParams()
  const albumData = albumsData[id]
  const {playWithId} = useContext(PlayerContext)

  return (
    <>
      <Navbar/>
      <div className="mt-10 flex gap-6 lg:gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 md:w-56 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-3">Playlist</p>
          <h2 className="text-4xl leading-none font-extrabold tracking-tight mb-4 md:text-7xl">{albumData.name}</h2>
          <h4 className="text-white/70 text-sm md:text-base font-medium">{albumData.desc}</h4>
          <p className="mt-3 text-sm md:text-[15px] text-white/80 flex flex-wrap items-center gap-2">
            <img className="inline-block w-5 mr-1.5 opacity-90" src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            • 1,34,456 likes
            • <b>50 songs,</b>
            about 2 hr 34 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-3 px-3 text-white/45 text-sm font-medium">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4 opacity-60" src={assets.clock_icon} alt="" />
      </div>

      <hr className="border-0 h-px bg-white/10" />

      {
        songsData.map((item, index) => (
          <div
            onClick={()=>playWithId(item.id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 px-3 py-3 items-center text-white/55 rounded-xl hover:bg-white/[0.07] hover:text-white transition-all duration-300 ease-out cursor-pointer"
          >
            <p className="text-white flex items-center min-w-0">
              <b className="mr-4 text-white/40 text-sm font-semibold">{index + 1}</b>
              <img className="inline w-10 h-10 rounded-lg object-cover mr-4 shadow-md" src={item.image} alt="" />
              {item.name}
            </p>
            <p className="text-[15px] text-white/65 truncate">{albumData.name}</p>
            <p className="text-[15px] text-white/50 hidden sm:block">7 days ago</p>
            <p className="text-[15px] text-center text-white/70 font-medium">{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum