import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const steps = ['Booked', 'In Transit', 'Reached Hub', 'Delivered']

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function Tracking() {
  const [searchParams] = useSearchParams()
  const lr = searchParams.get('lr') ?? 'LR-2024-001'
  const currentStep = 1

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Tracking
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-foreground/70">
        Track your shipment by LR or container number.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 rounded-xl bg-card p-6 shadow-lg shadow-black/20"
      >
        <p className="text-sm font-medium text-foreground/70">LR No: {lr}</p>
        <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Progress</h2>
        <div className="mt-6 flex items-center justify-between gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium ${
                  i <= currentStep ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-foreground/40'
                }`}
              >
                {i < currentStep ? '✓' : i + 1}
              </div>
              <span className={`mt-2 text-center text-xs font-medium ${i <= currentStep ? 'text-foreground' : 'text-foreground/40'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-2 rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          />
        </div>
        <p className="mt-6 text-sm text-foreground/70">
          Current status: <strong className="text-primary">{steps[currentStep]}</strong>
        </p>
      </motion.div>
    </motion.div>
  )
}
