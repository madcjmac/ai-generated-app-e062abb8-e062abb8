'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Library, User, Upload } from 'lucide-react'

export default function MobileNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 mobile-nav">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className={`${pathname === '/' ? 'text-white' : 'text-gray-400'}`}>
          <Home size={24} />
        </Link>
        <Link href="/library" className={`${pathname === '/library' ? 'text-white' : 'text-gray-400'}`}>
          <Library size={24} />
        </Link>
        <Link href="/upload" className={`${pathname === '/upload' ? 'text-white' : 'text-gray-400'}`}>
          <Upload size={24} />
        </Link>
        <Link href="/profile" className={`${pathname === '/profile' ? 'text-white' : 'text-gray-400'}`}>
          <User size={24} />
        </Link>
      </div>
    </nav>
  )
}