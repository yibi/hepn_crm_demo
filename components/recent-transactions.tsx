import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentTransactions = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    amount: "+500 points",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    amount: "-200 points",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    amount: "+300 points",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    amount: "+150 points",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    amount: "-100 points",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {recentTransactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${transaction.email}`} alt={transaction.name} />
            <AvatarFallback>{transaction.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.name}</p>
            <p className="text-sm text-muted-foreground">{transaction.email}</p>
          </div>
          <div className="ml-auto font-medium">
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  )
}