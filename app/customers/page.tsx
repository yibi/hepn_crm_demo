"use client"

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { CustomerTable } from '@/components/customer-table'
import { CustomerDetails } from '@/components/customer-details'

export default function CustomersPage() {
  const [selectedCustomer, setSelectedCustomer] = useState(null)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Customers</h1>
        <CustomerTable onCustomerSelect={setSelectedCustomer} />
        {selectedCustomer && (
          <CustomerDetails
            customer={selectedCustomer}
            onClose={() => setSelectedCustomer(null)}
          />
        )}
      </main>
    </div>
  )
}