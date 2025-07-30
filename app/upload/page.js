'use client'

import { useState } from 'react'

export default function Upload() {
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploading(true)
    
    // Create object URL for local storage
    const url = URL.createObjectURL(file)
    
    // Store in localStorage
    const tracks = JSON.parse(localStorage.getItem('tracks') || '[]')
    const newTrack = {
      id: Date.now(),
      title: file.name.replace('.mp3', ''),
      artist: 'Unknown Artist',
      url,
      artwork: '/default-artwork.jpg'
    }
    
    tracks.push(newTrack)
    localStorage.setItem('tracks', JSON.stringify(tracks))
    
    setUploading(false)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Upload Music</h1>
      <div className="glass-effect rounded-xl p-6">
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-8 cursor-pointer">
          <input 
            type="file" 
            accept=".mp3" 
            className="hidden" 
            onChange={handleUpload}
            disabled={uploading}
          />
          <span className="text-white mb-2">
            {uploading ? 'Uploading...' : 'Drop your MP3 here or click to upload'}
          </span>
        </label>
      </div>
    </div>
  )
}