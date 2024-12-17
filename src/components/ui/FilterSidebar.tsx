'use client'

const categories = ['All', 'Vegetables','Fruits', 'Aquatic Plants','Indoor Plants','Outdoor Plants', "Fruit & vegetable seeds"]

interface FilterSidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterSidebar({ selectedCategory, onCategoryChange }: FilterSidebarProps) {
  return (
    <aside className="w-full md:w-64 mb-8 md:mb-0">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left p-2 rounded ${
                selectedCategory === category
                  ? 'bg-[#8BC34A] text-white'
                  : 'hover:bg-[#8BC34A]/20'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

