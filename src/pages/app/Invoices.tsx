import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const rows = [
  { invoiceNo: 'INV-2024-001', customer: 'ABC Ltd', amount: '₹45,000', status: 'Paid' },
  { invoiceNo: 'INV-2024-002', customer: 'XYZ Corp', amount: '₹78,500', status: 'Pending' },
  { invoiceNo: 'INV-2024-003', customer: 'PQR Industries', amount: '₹32,000', status: 'Paid' },
]

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Invoices() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Invoices
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
        View and download your invoices.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-6 overflow-hidden rounded-xl bg-card shadow-card"
      >
        <div className="overflow-x-auto">
          <table className="min-w-[500px] divide-y divide-border">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Invoice No</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase text-foreground/60">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.invoiceNo}>
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-accent">{row.invoiceNo}</td>
                <td className="px-4 py-3 text-sm text-foreground/80">{row.customer}</td>
                <td className="px-4 py-3 text-sm text-foreground/80">{row.amount}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    row.status === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <motion.button
                    type="button"
                    className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-primary"
                    title="Download"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="h-4 w-4" />
                  </motion.button>
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
