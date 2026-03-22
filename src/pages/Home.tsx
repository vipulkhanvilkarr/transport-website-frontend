import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Truck, Package, Globe, Zap, Shield, MapPin, ArrowRight, Phone, Plus, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
// Add your own: import heroImg from '@/assets/hero.png' then use heroImg
const SERVICES_SHOWCASE = [
  {
    id: 'transport',
    tabLabel: 'India Transport',
    title: 'India Transport',
    description: 'Road freight and logistics across India. Full truck load and part load with safe, insured, on-time delivery. Real-time tracking and dedicated support for every consignment.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    to: '/services',
  },
  {
    id: 'warehousing',
    tabLabel: 'Warehousing',
    title: 'Warehousing',
    description: 'Storage, inventory management, and distribution at key locations. General and bonded warehouses available. We handle your stock so you can focus on growing your business.',
    image: 'https://images.unsplash.com/photo-1553413077-190a05a84dc3?w=800&q=80',
    to: '/services',
  },
  {
    id: 'import-export',
    tabLabel: 'Import Export',
    title: 'Import Export',
    description: 'International freight, customs clearance, and end-to-end logistics for global trade. We handle documentation, compliance, and movement across air and sea.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
    to: '/services',
  },
  {
    id: 'customs',
    tabLabel: 'Customs House Agent',
    title: 'Customs House (India Agent)',
    description: 'Complete import and export customs clearance at all major air and sea ports in India. Expert documentation and smooth clearance so your cargo moves without delay.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    to: '/services',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  hidden: {},
}

const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 10px -4px rgb(0 0 0 / 0.1)',
    transition: { duration: 0.25, ease: [0, 0, 0.2, 1] as const },
  },
  tap: { scale: 0.99 },
}

export default function Home() {
  // const [trackId, setTrackId] = useState('')
  const [showcaseServiceId, setShowcaseServiceId] = useState(SERVICES_SHOWCASE[0].id)
  // const navigate = useNavigate()
  const activeShowcase = SERVICES_SHOWCASE.find((s) => s.id === showcaseServiceId) ?? SERVICES_SHOWCASE[0]

  // const handleTrack = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // if (trackId.trim()) navigate(`/track?lr=${encodeURIComponent(trackId.trim())}`)
  // }

  const services = [
    { icon: Truck, title: 'India Transport', description: 'Road freight and logistics across India. Safe, timely delivery with real-time tracking.', to: '/services' },
    { icon: Package, title: 'Warehousing', description: 'Storage and distribution solutions. General and bonded warehouses available.', to: '/services' },
    { icon: Globe, title: 'Import Export', description: 'International freight, customs clearance, and end-to-end logistics.', to: '/services' },
  ]

  const whyUs = [
    { icon: Zap, title: 'Fast Delivery', text: 'On-time delivery across India with real-time updates.' },
    { icon: Shield, title: 'Secure Transport', text: 'Insured cargo and trained drivers for your peace of mind.' },
    { icon: MapPin, title: 'Real-time Tracking', text: 'Track your shipment 24/7 with LR or container number.' },
  ]

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    // { value: 'Coverage', label: 'Pan-India' }, 
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'Secure Transport' },
  ]

  return (
    <>
      {/* Hero */}
      <motion.section
        className="hero-gradient relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-medium text-secondary"
              >
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                Pan-India transport & logistics
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-[1.1]"
              >
                Reliable Transport & Logistics Solutions Across India
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                From road freight to warehousing and import-export, we deliver end-to-end logistics with care. Track anytime, anywhere.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+912268099999">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Button>
                </a>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-card shadow-xl sm:h-72">
                  <img
                    src={HERO_IMAGE}
                    alt="Logistics and transport"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Active Shipments card — floating on right like logistics dashboards */}
                <Link
                  to="/track"
                  className="absolute -right-2 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-lg transition hover:shadow-xl sm:right-4 sm:p-4 md:-right-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Truck className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-medium text-muted-foreground">Active Shipments</p>
                    <p className="font-display text-lg font-bold text-primary">
                      124 <span className="text-sm font-normal text-muted-foreground">Running</span>
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Tracking Box — directly under hero like real logistics sites */}
      <motion.section
        className="relative z-10 mx-auto max-w-4xl px-4 -mt-8 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {/* <form
          onSubmit={handleTrack}
          className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8"
        >
          <p className="mb-4 text-base font-semibold text-foreground">Track your consignment</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <label className="flex flex-1 items-center gap-3 rounded-xl bg-muted px-4 py-3.5 focus-within:ring-2 focus-within:ring-primary/20">
              <Search className="h-5 w-5 shrink-0 text-primary" />
              <input
                type="text"
                placeholder="Enter LR No. or container number"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
                aria-label="Track shipment"
              />
            </label>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Track Shipment
              </Button>
            </motion.div>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground md:text-left">
            Enter your LR or container number to see real-time status.
          </p>
        </form> */}
      </motion.section>

      {/* Stats strip */}
      <motion.section
        className="border-y border-border bg-card py-12 md:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-8">
            {stats.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp}>
                <p className="font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">{value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Services (tabs + image + description) */}
      <motion.section
        className="section-pad mx-auto max-w-7xl px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <div className="mb-8">
          <motion.p variants={fadeUp} className="text-section-label font-semibold uppercase tracking-wider text-primary">
            What we offer
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our Services
          </motion.h2>
        </div>

        {/* Tabs: click to change image and description */}
        <motion.nav
          variants={fadeUp}
          className="flex flex-wrap gap-1 border-b border-border pb-2"
          aria-label="Service tabs"
        >
          {SERVICES_SHOWCASE.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setShowcaseServiceId(service.id)}
              className={`relative px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                showcaseServiceId === service.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {service.tabLabel}
              {showcaseServiceId === service.id && (
                <motion.span
                  layoutId="service-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        {/* Card: image (left) + description (right) */}
        <motion.div
          variants={fadeUp}
          className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:mt-8"
        >
          <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-2">
            <div className="relative h-56 bg-muted lg:h-auto lg:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShowcase.id}
                  src={activeShowcase.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcase.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {activeShowcase.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {activeShowcase.description}
                  </p>
                  <Link
                    to={activeShowcase.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Plus className="h-4 w-4" />
                    </span>
                    View more about this service
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* More services grid */}
      <motion.section
        className="section-pad mx-auto max-w-7xl px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="text-center">
          <motion.p variants={fadeUp} className="text-section-label font-semibold uppercase tracking-wider text-primary">
            More solutions
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore all services
          </motion.h2>
        </div>
        <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={stagger}>
          {services.map(({ icon: Icon, title, description, to }) => (
            <motion.div key={title} variants={fadeUp}>
              <Link to={to} className="block h-full">
                <motion.div
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={cardHover}
                >
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="section-pad border-t border-border bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <motion.p variants={fadeUp} className="text-section-label font-semibold uppercase tracking-wider text-primary">
              Why Star Automart
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Why Choose Us
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Trusted by businesses across India.
            </motion.p>
          </div>
          <motion.div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8" variants={stagger}>
            {whyUs.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-card sm:p-8"
              >
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
