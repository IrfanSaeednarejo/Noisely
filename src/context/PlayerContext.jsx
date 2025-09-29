
import React from 'react'

import {createContext, useRef, useState, useEffect} from 'react'

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const contextValue = {
           audioRef

    }

  return (
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;
