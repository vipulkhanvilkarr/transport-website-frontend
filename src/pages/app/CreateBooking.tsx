import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Package } from 'lucide-react'
import { Button } from '@/components/ui/button'

const containerTypes = ['20ft', '40ft']

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.04 } }, hidden: {} }

export default function CreateBooking() {
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)
  const [form, setForm] = useState({
    consignorName: '',
    consigneeName: '',
    fromLocation: '',
    toLocation: '',
    containerType: '20ft',
    vehicleNumber: '',
    driverMobile: '',
    productName: '',
    rate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
  }

  const closeModal = () => {
    setShowSuccess(false)
    navigate('/dashboard/shipments')
  }

  const inputClass = "mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring/20"

  const fields = [
    { name: 'consignorName', label: 'Consignor Name' },
    { name: 'consigneeName', label: 'Consignee Name' },
    { name: 'fromLocation', label: 'From Location' },
    { name: 'toLocation', label: 'To Location' },
    { name: 'vehicleNumber', label: 'Vehicle Number' },
    { name: 'driverMobile', label: 'Driver Mobile' },
    { name: 'productName', label: 'Product Name' },
    { name: 'rate', label: 'Rate' },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.h1 variants={fadeUp} className="font-display text-2xl font-bold text-foreground">
        Create Booking
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-1 text-foreground/70">
        Submit a new shipment booking. LR will be generated on success.
      </motion.p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-4">
        {fields.map(({ name, label }) => (
          <motion.label key={name} className="block" variants={fadeUp}>
            <span className="text-sm font-medium text-foreground/80">{label}</span>
            <input
              type="text"
              name={name}
              value={form[name as keyof typeof form]}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </motion.label>
        ))}
        <motion.label className="block" variants={fadeUp}>
          <span className="text-sm font-medium text-foreground/80">Container Type</span>
          <select
            name="containerType"
            value={form.containerType}
            onChange={handleChange}
            className={inputClass}
          >
            {containerTypes.map((opt) => (
              <option key={opt} value={opt} className="bg-card text-foreground">{opt}</option>
            ))}
          </select>
        </motion.label>
        <motion.div variants={fadeUp} className="w-full sm:w-auto">
          <Button type="submit" className="w-full gap-2 sm:px-8" size="lg">
            <Package className="h-5 w-5" />
            Submit Booking
          </Button>
        </motion.div>
      </form>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="w-full max-w-sm rounded-xl bg-card p-8 text-center shadow-2xl shadow-black/40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Package className="h-8 w-8" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-foreground">LR Generated Successfully</h2>
              <p className="mt-2 text-sm text-foreground/70">Your booking has been created. You can view it in Shipments.</p>
              <Button onClick={closeModal} className="mt-6 w-full" size="lg">
                OK
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
