import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-10'>
        <h1 className='my-6 text-2xl md:text-[28px] font-bold tracking-tight text-white'>Featured Charts</h1>
        <div className='flex gap-4 overflow-x-auto overflow-y-hidden pb-2 pr-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
          { albumsData.map((item, index) => <AlbumItem key={index} name={item.name} desc = {item.desc} id = {item.id} image={item.image} />) }
        </div>
      </div>
      <div className='mb-10'>
        <h1 className='my-6 text-2xl md:text-[28px] font-bold tracking-tight text-white'>Today's biggest hits</h1>
        <div className='flex gap-4 overflow-x-auto overflow-y-hidden pb-2 pr-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
          { songsData.map((item, index) => <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />) }
        </div>
      </div>
    </>
  )
}

export default DisplayHome