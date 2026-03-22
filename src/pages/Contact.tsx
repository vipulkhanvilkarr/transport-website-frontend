import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  hidden: {},
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const inputClass = "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring/20"

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        description="Get in touch for quotes, support, or a callback."
      />
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <motion.h2 variants={fadeUp} className="font-display text-xl font-semibold text-foreground">
              Office Address
            </motion.h2>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="mt-4 flex items-start gap-4 rounded-2xl bg-card p-6 shadow-lg shadow-black/20"
            >
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <span className="leading-relaxed text-foreground/80">
                707-713, Corporate Centre, Nirmal Life Style, L.B.S. Road, Mulund West, Mumbai 400 080, India
              </span>
            </motion.div>
            <div className="mt-6 space-y-4">
              <motion.a
                href="tel:+912268099999"
                variants={fadeUp}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-lg shadow-black/20 transition hover:bg-primary/10"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">+91 22 680 99999</span>
              </motion.a>
              <motion.a
                href="mailto:info@starautomart.com"
                variants={fadeUp}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-lg shadow-black/20 transition hover:bg-primary/10"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">info@starautomart.com</span>
              </motion.a>
            </div>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex h-56 items-center justify-center rounded-2xl bg-card text-muted-foreground shadow-lg shadow-black/20"
            >
              Map placeholder
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-card p-8 shadow-lg shadow-black/20"
          >
            <h2 className="font-display text-xl font-semibold text-foreground">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {['name', 'email', 'subject'].map((name) => (
                <label key={name} className="block">
                  <span className="text-sm font-medium text-foreground/80">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                  <input
                    type={name === 'email' ? 'email' : 'text'}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-sm font-medium text-foreground/80">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass}
                />
              </label>
              <motion.button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
