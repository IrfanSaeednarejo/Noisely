import React from 'react'
import { useParams } from 'react-router-dom';
import { songsData } from '../assets/frontend-assets/assets';
import Navbar from './Navbar.jsx';

const DisplaySong = () => {
    const {id}= useParams();
    const songData= songsData[id];
  return (
    <div>
        <Navbar/>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <img className='rounded' src={songData.image} alt="" />
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <h2 className='text-2xl font-bold'>{songData.name}</h2>
            <p className='text-sm text-[#a7a7a7]'>{songData.artist}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.desc}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.duration}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.album}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.releaseDate}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.genre}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.albumDesc}</p>
        </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212]  text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <p className='text-sm text-[#a7a7a7]'>{songData.albumDesc}</p>
        </div>
        
    </div>
  )
}

export default DisplaySong