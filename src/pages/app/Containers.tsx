import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Containers() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Containers
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
        Manage container inventory (Admin).
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-6 rounded-xl bg-card p-6 text-sm text-muted-foreground shadow-lg shadow-black/20"
      >
        This section can be implemented with a table of container IDs, types (20ft/40ft), and status.
      </motion.p>
    </motion.div>
  )
}
