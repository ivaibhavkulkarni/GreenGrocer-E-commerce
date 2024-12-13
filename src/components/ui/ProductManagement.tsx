import { AddProductForm } from './AddProductForm'
import { ProductsTable } from './ProductsTable'

export function ProductManagement() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Product Management</h2>
      <AddProductForm />
      <ProductsTable />
    </section>
  )
}

