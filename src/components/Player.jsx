import React, { useContext } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import {PlayerContext} from '../context/PlayerContext.jsx'
const Player = () => {

  const {seekBg, seekBar,playStatus,play,pause,track,previous,next,time,seeksong} = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black text-white flex items-center justify-between px-4'>
      
    
      <div className='hidden lg:flex items-center gap-4'>
        <img src={track.image} alt="song" className='w-12' />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>

    
      <div className='flex flex-col items-center gap-2 m-auto'>
      
        <div className='flex items-center gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="prev" />
          {playStatus ? (
            <img className='w-4 cursor-pointer' src={assets.pause_icon} alt="pause" onClick={pause} />
          ) : (
            <img className='w-4 cursor-pointer' src={assets.play_icon} alt="play" onClick={play} />
          )}
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loop" />
        </div>

        <div className='flex items-center gap-3 w-full'>
          <p >{time.currentTime.minute}:{time.currentTime.second}</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-600 h-1 rounded-full cursor-pointer" ref={seekBg} onClick={seeksong}>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p >{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

    
      <div className="hidden lg:flex bg-black items-center gap-2 opacity-75">
        <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="mic" />
        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="mic" />
        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="queue" />
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="speaker" />
        <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="volume" />
        <div className='w-20 bg-slate-600 h-1 rounded'>

        </div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="mini-player" />
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="zoom" />
      </div>
    </div>
  )
}

export default Player
