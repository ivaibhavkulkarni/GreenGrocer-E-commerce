import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button className="bg-[#8BC34A] text-white px-4 py-2 rounded-full hover:bg-[#7CB342] transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

