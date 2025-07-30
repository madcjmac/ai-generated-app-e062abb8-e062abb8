'use client'

import { useAudio } from '../context/AudioContext'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

export default function PlayerBar() {
  const { currentTrack, isPlaying, togglePlay } = useAudio()

  if (!currentTrack) return null

  return (
    <div className="fixed bottom-16 left-0 right-0 player-controls p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={currentTrack.artwork} 
            alt={currentTrack.title}
            className="w-12 h-12 rounded-lg"
          />
          <div className="ml-3">
            <p className="text-white font-medium">{currentTrack.title}</p>
            <p className="text-gray-400 text-sm">{currentTrack.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <SkipBack size={24} />
          </button>
          <button 
            className="text-white bg-white/10 p-2 rounded-full"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="text-white">
            <SkipForward size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}