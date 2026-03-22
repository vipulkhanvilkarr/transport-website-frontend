import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'
import { Target, Eye, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  hidden: {},
}

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Star Automart"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        description="Your trusted partner in transport and logistics across India."
      />
      <motion.div
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <motion.p
          className="text-lg leading-relaxed text-muted-foreground"
          variants={fadeUp}
        >
          We are a transport and logistics company offering reliable solutions across India. Our services include road transport, warehousing, and import-export support—delivered with a focus on transparency and on-time delivery.
        </motion.p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-card p-8 shadow-lg shadow-black/20"
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-primary"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Target className="h-6 w-6" />
            </motion.div>
            <h2 className="mt-6 font-display text-xl font-semibold text-foreground">Vision & Mission</h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              To be the preferred logistics partner by delivering on-time, secure, and transparent services. We focus on customer satisfaction and continuous improvement in every shipment.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-card p-8 shadow-lg shadow-black/20"
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-primary"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Eye className="h-6 w-6" />
            </motion.div>
            <h2 className="mt-6 font-display text-xl font-semibold text-foreground">Our Promise</h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              Real-time tracking, insured cargo, and a dedicated team so you can focus on your business while we handle the logistics.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="mt-16 rounded-2xl bg-card p-8 shadow-lg shadow-black/20 md:p-10"
        >
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-primary"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Users className="h-6 w-6" />
          </motion.div>
          <h2 className="mt-6 font-display text-xl font-semibold text-foreground">Our Team</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-foreground/70">
            Experienced professionals in transport, warehousing, and customs ensure your cargo is in safe hands. From dispatch to delivery, we work as an extension of your team. Contact us for a tailored solution.
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}
