import React from 'react'
import Navbar from './Navbar.jsx'
import { albumsData } from '../assets/frontend-assets/assets.js'
import AlbumItem from './AlbumItem.jsx'
import { songsData } from '../assets/frontend-assets/assets.js'
import SongItem from './SongItem.jsx'
const DisplayHome = () => {
  return (
    <>
        <Navbar/>

        <div className='mb-4'>
            <h1 className='my-5 font-bold' >Feature Charts</h1>
            <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
            </div>
        </div>

        <div className='mb-4'>
            <h1 className='my-5 font-bold' >Todays Biggest Hits</h1>
            <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(<SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
            </div>
        </div>  

    </>
  )
}

export default DisplayHome