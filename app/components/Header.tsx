'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gray-900">DMAZ Alyxers</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a>
            <a href="#tools" className="text-gray-600 hover:text-primary-600 transition-colors">Tools</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors py-2">Home</a>
              <a href="#tools" className="text-gray-600 hover:text-primary-600 transition-colors py-2">Tools</a>
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors py-2">About</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors py-2">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
