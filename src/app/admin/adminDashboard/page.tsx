import { MetricsCards } from '../../../components/ui/MetricsCards'
import { ProductManagement } from '../../../components/ui/ProductManagement'
import Navbar from "../../../components/ui/navbar"

export default function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <title>GreenGrocer Admin</title>
      <div className="p-6 max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <MetricsCards />
        <ProductManagement />
      </div>
    </div>
  )
}
