'use client'

import { createContext, useContext, useState, useRef } from 'react'

const AudioContext = createContext()

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlist, setPlaylist] = useState([])
  const audioRef = useRef(null)

  const playTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.src = track.url
      audioRef.current.play()
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <AudioContext.Provider value={{
      currentTrack,
      isPlaying,
      playlist,
      playTrack,
      togglePlay,
      setPlaylist,
      audioRef
    }}>
      {children}
      <audio ref={audioRef} />
    </AudioContext.Provider>
  )
}

export const useAudio = () => useContext(AudioContext)