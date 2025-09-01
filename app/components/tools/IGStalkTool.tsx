'use client'

import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function IGStalkTool() {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!username.trim()) {
      toast.error('Masukkan username Instagram!')
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const response = await axios.post('/api/igstalk', { username })
      
      if (response.data.success) {
        setResult(response.data.data)
        toast.success('Data berhasil diambil!')
      } else {
        toast.error('Gagal mengambil data')
      }
    } catch (error) {
      toast.error('Terjadi kesalahan!')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username Instagram
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Contoh: cristiano"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Mengambil Data...' : 'Stalk Profile'}
          </button>
        </form>
      </div>

      {result && (
        <div className="card">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={result.profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">@{result.username}</h3>
              <p className="text-gray-600 mb-4">{result.fullname || 'Tidak ada nama'}</p>
              <p className="text-gray-800 mb-4">{result.bio || 'Tidak ada bio'}</p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">{result.posts}</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">{result.followers}</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">{result.following}</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
