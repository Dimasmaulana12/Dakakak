import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json({ error: 'URL diperlukan' }, { status: 400 })
    }

    const apiUrl = `https://api.siputzx.my.id/api/d/tiktok?url=${encodeURIComponent(url)}`
    const { data } = await axios.get(apiUrl)

    if (data.status && data.data.urls && data.data.urls.length > 0) {
      return NextResponse.json({
        success: true,
        data: {
          videoUrl: data.data.urls[0],
          title: data.data.metadata.title,
          creator: data.data.metadata.creator
        }
      })
    } else {
      throw new Error('Gagal memproses link TikTok')
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Gagal mengunduh video TikTok' }, { status: 500 })
  }
}
