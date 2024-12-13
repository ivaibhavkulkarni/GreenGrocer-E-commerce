"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AddProductForm() {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add logic to submit the new product
    console.log('New product:', { productName, price, stock })
    // Reset form
    setProductName('')
    setPrice('')
    setStock('')
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit} className="flex gap-4 items-end">
          <div className="flex-1">
            <Input 
              type="text" 
              placeholder="Product Name" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-24">
            <Input 
              type="number" 
              placeholder="Price" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-24">
            <Input 
              type="number" 
              placeholder="Stock" 
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

