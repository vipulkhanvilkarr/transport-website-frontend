import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'
import { Truck, Package, Globe, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Full truck load and part load across India. Safe, insured, on-time delivery with real-time tracking and dedicated support.',
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Storage, inventory management, and distribution. General and bonded warehouses available at key locations.',
  },
  {
    icon: Globe,
    title: 'Import Export',
    description: 'International freight, customs clearance, and end-to-end logistics for global trade. We handle documentation and compliance.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  hidden: {},
}

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        description="End-to-end transport and logistics solutions for your business."
      />
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Link to="/contact" className="block h-full">
                <motion.div
                  className="group flex h-full flex-col rounded-2xl bg-card p-8 shadow-lg shadow-black/20"
                  whileHover={{ y: -6, scale: 1.02, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.35)' }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] as const }}
                >
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <h2 className="mt-6 font-display text-xl font-semibold text-foreground">{title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-foreground/70">{description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3">
                    Get a quote
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}
