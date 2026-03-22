import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type PageHeroProps = {
  title: string
  breadcrumb?: { label: string; to?: string }[]
  description?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.35 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  hidden: {},
}

export default function PageHero({ title, breadcrumb, description }: PageHeroProps) {
  return (
    <motion.section
      className="page-hero-gradient py-12 md:py-16"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
            variants={fadeUp}
          >
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {item.to ? (
                  <Link to={item.to} className="transition hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="text-muted-foreground/60">/</span>}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.h1
          className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          variants={fadeUp}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="mt-3 max-w-2xl text-lg text-muted-foreground"
            variants={fadeUp}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}
