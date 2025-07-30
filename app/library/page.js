'use client'

import { useEffect, useState } from 'react'
import { useAudio } from '../context/AudioContext'

export default function Library() {
  const [tracks, setTracks] = useState([])
  const { playTrack } = useAudio()

  useEffect(() => {
    const storedTracks = JSON.parse(localStorage.getItem('tracks') || '[]')
    setTracks(storedTracks)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Your Library</h1>
      <div className="space-y-4">
        {tracks.map((track) => (
          <div 
            key={track.id}
            className="glass-effect rounded-lg p-4 flex items-center cursor-pointer"
            onClick={() => playTrack(track)}
          >
            <img 
              src={track.artwork} 
              alt={track.title}
              className="w-16 h-16 rounded-lg"
            />
            <div className="ml-4">
              <p className="text-white font-medium">{track.title}</p>
              <p className="text-gray-400">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}