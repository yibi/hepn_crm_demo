"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CustomerDetails({ customer, onClose }) {
  if (!customer) return null

  return (
    <Dialog open={!!customer} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{customer.name}</DialogTitle>
          <DialogDescription>{customer.email}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-3 gap-2 text-sm">
                <dt className="font-medium">Status:</dt>
                <dd className="col-span-2">
                  <Badge variant={customer.status === "Active" ? "default" : "secondary"}>
                    {customer.status}
                  </Badge>
                </dd>
                <dt className="font-medium">Total Points:</dt>
                <dd className="col-span-2">{customer.totalPoints}</dd>
              </dl>
            </CardContent>
          </Card>
          {/* Add more cards here for additional customer details */}
        </div>
      </DialogContent>
    </Dialog>
  )
}