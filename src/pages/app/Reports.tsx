import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Reports() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Reports
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
        Analytics and reports (Admin).
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-6 rounded-xl bg-card p-6 text-sm text-muted-foreground shadow-lg shadow-black/20"
      >
        This section can show shipment volume, revenue, and custom date-range reports.
      </motion.p>
    </motion.div>
  )
}
