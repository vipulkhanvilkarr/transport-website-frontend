import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, MapPin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const rows = [
  { lrNo: 'LR-2024-001', container: 'CONT-20-001', from: 'Mumbai', to: 'Delhi', status: 'In Transit' },
  { lrNo: 'LR-2024-002', container: 'CONT-40-002', from: 'Chennai', to: 'Bangalore', status: 'Delivered' },
  { lrNo: 'LR-2024-003', container: '—', from: 'Pune', to: 'Hyderabad', status: 'Booked' },
]

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Shipments() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
          Shipments
        </motion.h1>
        <motion.div variants={fadeUp}>
          <Link to="/dashboard/shipments/new">
            <Button size="sm" className="w-full sm:w-auto">Create Booking</Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        className="mt-6 overflow-hidden rounded-xl bg-card shadow-card"
      >
        <div className="overflow-x-auto">
          <table className="min-w-[600px] divide-y divide-border">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">LR No</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">Container</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">From</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">To</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.lrNo}>
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-primary">{row.lrNo}</td>
                <td className="px-4 py-3 text-sm text-foreground/80">{row.container}</td>
                <td className="px-4 py-3 text-sm text-foreground/80">{row.from}</td>
                <td className="px-4 py-3 text-sm text-foreground/80">{row.to}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {row.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button type="button" className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-primary" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <Link to={`/dashboard/tracking?lr=${row.lrNo}`} className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-primary" title="Track">
                      <MapPin className="h-4 w-4" />
                    </Link>
                    <button type="button" className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-primary" title="Download LR">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </motion.div>
    </motion.div>
  )
}
