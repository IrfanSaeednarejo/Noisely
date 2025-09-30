import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext.jsx';
import { useContext } from 'react';

const SongItem = ({name,image,desc,id}) => {
     const navigate= useNavigate();
    const {playWithId}= useContext(PlayerContext)
    const handleSongClick=()=>{
        navigate(`/song/${id}`);
        playWithId(id);
    }
  return (
    <div onClick={handleSongClick} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongItem