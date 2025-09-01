'use client'

import { useState } from 'react'
import Header from './components/Header'
import ToolCard from './components/ToolCard'
import Footer from './components/Footer'

const tools = [
  {
    id: 'igstalk',
    title: 'Instagram Stalk',
    description: 'Lihat informasi profil Instagram',
    icon: '📸',
    category: 'Social Media'
  },
  {
    id: 'tiktok',
    title: 'TikTok Downloader',
    description: 'Download video TikTok tanpa watermark',
    icon: '🎵',
    category: 'Downloader'
  },
  {
    id: 'instagram',
    title: 'Instagram Downloader',
    description: 'Download foto/video dari Instagram',
    icon: '📷',
    category: 'Downloader'
  },
  {
    id: 'pinterest',
    title: 'Pinterest Downloader',
    description: 'Download media dari Pinterest',
    icon: '📌',
    category: 'Downloader'
  },
  {
    id: 'terabox',
    title: 'Terabox Downloader',
    description: 'Download file dari Terabox',
    icon: '📦',
    category: 'Downloader'
  },
  {
    id: 'scribd',
    title: 'Scribd Downloader',
    description: 'Download dokumen dari Scribd',
    icon: '📄',
    category: 'Downloader'
  },
  {
    id: 'cuaca',
    title: 'Info Cuaca',
    description: 'Cek prakiraan cuaca wilayah Indonesia',
    icon: '🌤️',
    category: 'Information'
  },
  {
    id: 'gempa',
    title: 'Info Gempa',
    description: 'Informasi gempa terkini dari BMKG',
    icon: '🌍',
    category: 'Information'
  },
  {
    id: 'ai',
    title: 'AI Assistant',
    description: 'Tanya jawab dengan AI',
    icon: '🤖',
    category: 'AI'
  },
  {
    id: 'emojimix',
    title: 'Emoji Mix',
    description: 'Gabungkan dua emoji jadi satu',
    icon: '😂',
    category: 'Fun'
  },
  {
    id: 'susunkata',
    title: 'Game Susun Kata',
    description: 'Main game susun kata seru',
    icon: '🎮',
    category: 'Game'
  },
  {
    id: 'sticker',
    title: 'Cari Sticker',
    description: 'Cari paket sticker WhatsApp',
    icon: '🎨',
    category: 'Fun'
  }
]

const categories = ['All', 'Downloader', 'Social Media', 'Information', 'AI', 'Fun', 'Game']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            DMAZ <span className="text-primary-600">Alyxers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kumpulan tools berguna untuk download media, cek informasi, AI assistant, dan masih banyak lagi!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
    }
