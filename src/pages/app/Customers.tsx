import { motion } from 'framer-motion'

const rows = [
  { id: '1', name: 'ABC Ltd', email: 'contact@abc.com', mobile: '9876543210', gst: '27AABCU9603R1ZM' },
  { id: '2', name: 'XYZ Corp', email: 'info@xyz.com', mobile: '9876543211', gst: '29AABCU9603R1ZN' },
]

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Customers() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Customers
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
        Manage customer accounts (Admin).
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-6 overflow-hidden rounded-xl bg-card shadow-card"
      >
        <div className="overflow-x-auto">
          <table className="min-w-[500px] divide-y divide-border">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">Mobile</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase text-foreground/60">GST</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-foreground">{row.name}</td>
                <td className="px-4 py-3 text-sm text-foreground">{row.email}</td>
                <td className="px-4 py-3 text-sm text-foreground">{row.mobile}</td>
                <td className="px-4 py-3 text-sm text-foreground">{row.gst}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}
