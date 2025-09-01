'use client'

import Link from 'next/link'

interface Tool {
  id: string
  title: string
  description: string
  icon: string
  category: string
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.id}`}>
      <div className="card hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
        <div className="text-center">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
            {tool.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
          <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
            {tool.category}
          </div>
        </div>
      </div>
    </Link>
  )
}
