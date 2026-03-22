import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  MapPin,
  FileText,
  Users,
  Container,
  DollarSign,
  BarChart3,
  Truck,
  X,
} from 'lucide-react'
import { useEffect } from 'react'

const customerMenu = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/dashboard/shipments', label: 'Shipments', icon: Package },
  { to: '/dashboard/shipments/new', label: 'Create Booking', icon: PlusCircle },
  { to: '/dashboard/tracking', label: 'Tracking', icon: MapPin },
  { to: '/dashboard/invoices', label: 'Invoices', icon: FileText },
]

const adminMenu = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/dashboard/customers', label: 'Customers', icon: Users },
  { to: '/dashboard/shipments', label: 'Shipments', icon: Package },
  { to: '/dashboard/containers', label: 'Containers', icon: Container },
  { to: '/dashboard/rates', label: 'Rates', icon: DollarSign },
  { to: '/dashboard/billing', label: 'Billing', icon: FileText },
  { to: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
]

type AppSidebarProps = { open?: boolean; onClose?: () => void }

export default function AppSidebar({ open = false, onClose }: AppSidebarProps) {
  const { user } = useAuth()
  const location = useLocation()
  const isAdmin = user?.role === 'admin'
  const menu = isAdmin ? adminMenu : customerMenu

  useEffect(() => {
    onClose?.()
  }, [location.pathname])

  return (
    <>
      {/* Mobile overlay */}
      <div
        role="presentation"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-card shadow-xl transition-transform duration-200 ease-out lg:block lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-2 px-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-7 w-7 shrink-0 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">STAR AUTOMART</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-foreground/80 hover:bg-muted hover:text-foreground lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-1 overflow-y-auto p-3">
          {menu.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive ? 'bg-primary text-white' : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                }`
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
