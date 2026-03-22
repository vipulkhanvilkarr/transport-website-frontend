import { Link } from 'react-router-dom'
import { Truck, MapPin, Phone, Mail, ArrowRight, Award } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Track Shipment', to: '/track' },
  { label: 'Contact', to: '/contact' },
]

export default function PublicFooter() {
  return (
    <footer className="relative bg-dark text-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.15)]">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                <Truck className="h-5 w-5 text-primary" />
              </span>
              STAR AUTOMART
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Reliable Transport & Logistics Solutions Across India. One partner for all your cargo needs.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:gap-3 hover:text-secondary-hover"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {links.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-400 transition hover:text-secondary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Address</h3>
            <div className="mt-4 flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <span className="leading-relaxed">
                707-713, Corporate Centre, L.B.S. Road, Mulund West, Mumbai 400 080, India
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="tel:+912268099999"
                className="flex items-center gap-3 text-slate-400 transition hover:text-secondary"
              >
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                +91 22 680 99999
              </a>
              <a
                href="mailto:info@starautomart.com"
                className="flex items-center gap-3 text-slate-400 transition hover:text-secondary"
              >
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                info@starautomart.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-slate-400">
          <Award className="h-4 w-4 shrink-0 text-secondary" />
          <span className="text-sm">Certified logistics partner — Serving 500+ businesses across India</span>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-600/80 pt-10 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Star Automart. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Transport • Warehousing • Import Export
          </p>
        </div>
      </div>
    </footer>
  )
}
