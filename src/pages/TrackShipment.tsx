import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import PageHero from '../components/PageHero'
import { motion, AnimatePresence } from 'framer-motion'

const steps = ['Booked', 'In Transit', 'Reached Hub', 'Delivered']

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } }

export default function TrackShipment() {
  const [searchParams] = useSearchParams()
  const initialLr = searchParams.get('lr') ?? ''
  const [lr, setLr] = useState(initialLr)
  const [result, setResult] = useState<{ found: boolean; status?: number } | null>(null)

  useEffect(() => {
    setLr(initialLr)
    if (initialLr) setResult({ found: true, status: 1 })
    else setResult(null)
  }, [initialLr])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (lr.trim()) setResult({ found: true, status: 1 })
    else setResult(null)
  }

  return (
    <>
      <PageHero
        title="Track Shipment"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Track Shipment' }]}
        description="Enter your LR Number or Container Number to see real-time status."
      />
      <motion.div
        className="mx-auto max-w-2xl px-4 py-12 sm:px-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
      >
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-xl shadow-black/30 sm:flex-row sm:items-center"
        >
          <label className="flex flex-1 items-center gap-3 rounded-xl bg-muted px-4 py-3.5 focus-within:ring-2 focus-within:ring-primary/20">
            <Search className="h-5 w-5 shrink-0 text-primary" />
            <input
              type="text"
              placeholder="LR Number or Container Number"
              value={lr}
              onChange={(e) => setLr(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
              aria-label="Track shipment"
            />
          </label>
          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="h-5 w-5" />
            Track
          </motion.button>
        </motion.form>

        <AnimatePresence mode="wait">
          {result?.found && (
            <motion.div
              key="result"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="mt-10 rounded-2xl bg-card p-6 shadow-lg shadow-black/20 md:p-8"
            >
              <p className="text-sm font-medium text-foreground/70">LR / Container: {lr}</p>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Shipment Status</h2>
              <div className="mt-8">
                <div className="flex items-center justify-between gap-2">
                  {steps.map((label, i) => (
                    <div key={label} className="flex flex-1 flex-col items-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium ${
                          i <= (result.status ?? 0) ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-foreground/40'
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span className={`mt-2 text-center text-xs font-medium ${i <= (result.status ?? 0) ? 'text-foreground' : 'text-foreground/40'}`}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-2 rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${((result.status ?? 0) / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
                  />
                </div>
              </div>
              <p className="mt-6 text-sm text-foreground/70">
                Current status: <strong className="text-primary">{steps[result.status ?? 0]}</strong>
              </p>
            </motion.div>
          )}

          {result && !result.found && (
            <motion.div
              key="notfound"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-10 rounded-2xl bg-card p-6 text-center shadow-lg shadow-black/20"
            >
              <p className="text-primary">No shipment found for this number. Please check and try again.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
