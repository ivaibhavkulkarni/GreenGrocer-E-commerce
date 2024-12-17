'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search plants, vegetables, aquatic plants..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            onSearch(e.target.value) // Update search results as user types
          }}
          className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <Search className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </form>
  )
}

