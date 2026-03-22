import { motion } from 'framer-motion'
import { Package, Truck, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Total Shipments', value: '24', icon: Package, color: 'bg-primary text-primary-foreground' },
  { label: 'Active Shipments', value: '5', icon: Truck, color: 'bg-primary/90 text-primary-foreground' },
  { label: 'Delivered', value: '18', icon: CheckCircle, color: 'bg-green-600 text-white' },
  { label: 'Pending Payments', value: '3', icon: Clock, color: 'bg-secondary text-secondary-foreground' },
]

const recentBookings = [
  { lrNo: 'LR-2024-001', from: 'Mumbai', to: 'Delhi', status: 'In Transit', date: '2024-03-10' },
  { lrNo: 'LR-2024-002', from: 'Chennai', to: 'Bangalore', status: 'Delivered', date: '2024-03-08' },
  { lrNo: 'LR-2024-003', from: 'Pune', to: 'Hyderabad', status: 'Booked', date: '2024-03-12' },
]

function getStatusBadgeClass(status: string) {
  switch (status) {
    case 'Booked':
      return 'bg-amber-100 text-amber-800'
    case 'In Transit':
      return 'bg-blue-100 text-blue-800'
    case 'Delivered':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }

export default function Dashboard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.h1 variants={fadeUp} className="font-display text-xl font-bold text-foreground sm:text-2xl">
        Dashboard
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
        Overview of your shipments and activity.
      </motion.p>

      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
      >
        {stats.map(({ label, value, icon: Icon, color }) => (
          <motion.div key={label} variants={fadeUp} whileHover={{ y: -2 }}>
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
                  </div>
                  <div className={`rounded-lg p-3 ${color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <motion.h2 variants={fadeUp} className="font-display text-lg font-semibold text-foreground">
          Recent Bookings
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4 overflow-hidden rounded-xl">
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-[600px] divide-y divide-border">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">LR No</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">From</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">To</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentBookings.map((row) => (
                    <tr key={row.lrNo}>
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-primary">{row.lrNo}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.from}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.to}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground">{row.date}</td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
