import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    if (!query) {
      return NextResponse.json({ error: 'Pertanyaan diperlukan' }, { status: 400 })
    }

    const systemPrompt = "You are a helpful assistant."
    const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(systemPrompt)}&content=${encodeURIComponent(query)}`
    
    const { data } = await axios.get(apiUrl)

    if (data.status && data.data) {
      return NextResponse.json({
        success: true,
        data: data.data
      })
    } else {
      throw new Error('Gagal mendapatkan respons dari AI')
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Gagal mendapatkan respons AI' }, { status: 500 })
  }
}
