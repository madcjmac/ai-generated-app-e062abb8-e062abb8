import './globals.css'
import { Inter } from 'next/font/google'
import MobileNavigation from './components/MobileNavigation'
import PlayerBar from './components/PlayerBar'
import { AudioProvider } from './context/AudioContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Glass MP3 Player',
  description: 'Advanced MP3 Player with Glassmorphism Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black min-h-screen`}>
        <AudioProvider>
          <div className="pb-24"> {/* Padding bottom for player bar */}
            {children}
          </div>
          <PlayerBar />
          <MobileNavigation />
        </AudioProvider>
      </body>
    </html>
  )
}