import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Menu, X, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Track Shipment', to: '/track' },
  { label: 'Contact', to: '/contact' },
]

function isActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(to + '/')
}

export default function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogout = () => {
    logout()
    setMobileOpen(false)
    navigate('/')
  }

  const navLinkClass = (to: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted hover:text-primary ${
      isActive(pathname, to) ? 'bg-primary/10 text-primary' : 'text-foreground/80'
    }`
  const navLinkClassMobile = (to: string) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive(pathname, to) ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled ? 'border-border bg-card/95 shadow-sm backdrop-blur-sm' : 'border-transparent bg-background'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-xl font-bold text-foreground transition hover:text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Truck className="h-5 w-5 text-primary" />
          </span>
          STAR AUTOMART
        </Link>
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map(({ label, to }) =>
            to === '/track' ? (
              <Link key={to} to={to} className="ml-1">
                <Button variant={isActive(pathname, to) ? 'default' : 'secondary'} size="sm">
                  {label}
                </Button>
              </Link>
            ) : (
              <Link key={to} to={to} className={navLinkClass(to)}>
                {label}
              </Link>
            )
          )}
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="ml-3">
                <Button>Dashboard</Button>
              </Link>
              <Button variant="outline" onClick={handleLogout} className="ml-2">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className={`ml-3 ${navLinkClass('/login')}`}>
                Login
              </Link>
              <Link to="/register" className="ml-2">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </nav>
        <button
          type="button"
          className="rounded-lg p-2.5 text-foreground transition hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="bg-card shadow-inner px-4 py-4 md:hidden">
          <div className="flex flex-col gap-0.5">
            {navLinks.map(({ label, to }) =>
              to === '/track' ? (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)} className="mt-2">
                  <Button
                    variant={isActive(pathname, to) ? 'default' : 'secondary'}
                    size="sm"
                    className="w-full justify-center"
                  >
                    {label}
                  </Button>
                </Link>
              ) : (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)} className={navLinkClassMobile(to)}>
                  {label}
                </Link>
              )
            )}
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className={navLinkClassMobile('/login')}>
                  Login
                </Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
