import { Card, CardContent } from "@/components/ui/card"

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-blue-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl">0</p>
        </CardContent>
      </Card>
      
      <Card className="bg-green-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
          <p className="text-3xl">₹0.00</p>
        </CardContent>
      </Card>
    </div>
  )
}

