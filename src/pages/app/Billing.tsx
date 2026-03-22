import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Billing() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Billing
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
        Billing and payments (Admin).
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-6 rounded-xl bg-card p-6 text-sm text-muted-foreground shadow-lg shadow-black/20"
      >
        This section can list all invoices and payment status for admin.
      </motion.p>
    </motion.div>
  )
}
