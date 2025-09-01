'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface ToolLayoutProps {
  title: string
  description: string
  icon: string
  children: React.ReactNode
}

export default function ToolLayout({ title, description, icon, children }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Kembali ke Home
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}
