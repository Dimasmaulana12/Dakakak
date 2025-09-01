'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'
import IGStalkTool from '../../components/tools/IGStalkTool'
import TikTokTool from '../../components/tools/TikTokTool'
import AITool from '../../components/tools/AITool'
import CuacaTool from '../../components/tools/CuacaTool'
// Import tool components lainnya...

const toolComponents = {
  'igstalk': IGStalkTool,
  'tiktok': TikTokTool,
  'ai': AITool,
  'cuaca': CuacaTool,
  // Tambahkan mapping tool lainnya...
}

const toolInfo = {
  'igstalk': {
    title: 'Instagram Stalk',
    description: 'Lihat informasi profil Instagram',
    icon: '📸'
  },
  'tiktok': {
    title: 'TikTok Downloader',
    description: 'Download video TikTok tanpa watermark',
    icon: '🎵'
  },
  'ai': {
    title: 'AI Assistant',
    description: 'Tanya jawab dengan AI',
    icon: '🤖'
  },
  'cuaca': {
    title: 'Info Cuaca',
    description: 'Cek prakiraan cuaca wilayah Indonesia',
    icon: '🌤️'
  }
  // Tambahkan info tool lainnya...
}

export default function ToolPage() {
  const params = useParams()
  const toolId = params.toolId as string
  
  const ToolComponent = toolComponents[toolId as keyof typeof toolComponents]
  const info = toolInfo[toolId as keyof typeof toolInfo]

  if (!ToolComponent || !info) {
    return (
      <ToolLayout title="Tool Tidak Ditemukan" description="" icon="❌">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tool Tidak Ditemukan</h2>
          <p className="text-gray-600">Tool yang Anda cari tidak tersedia.</p>
        </div>
      </ToolLayout>
    )
  }

  return (
    <ToolLayout title={info.title} description={info.description} icon={info.icon}>
      <ToolComponent />
    </ToolLayout>
  )
}
