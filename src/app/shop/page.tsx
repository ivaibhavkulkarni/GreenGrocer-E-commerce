'use client'

import { useState } from 'react'
import ProductGrid from '@/components/ui/ProductGrid'
import SearchBar from '@/components/ui/SearchBar'
import FilterSidebar from '@/components/ui/FilterSidebar'

// Mock data for demonstration
const products = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Outdoor Plants', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Tomato Plant', category: 'Vegetables', price: 4.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Water Lily', category: 'Aquatic Plants', price: 14.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Snake Plant', category: 'Indoor Plants', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Bell Pepper Plant', category: 'Vegetables', price: 5.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Lotus', category: 'Aquatic Plants', price: 24.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 7, name: 'Mango Seeds', category: 'Fruit & vegetable seeds', price: 24.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 8, name: 'Apple', category: 'Fruits', price: 24.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#8BC34A]">GreenGrocer</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

