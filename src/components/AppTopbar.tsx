import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogOut, Menu, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

type AppTopbarProps = { onMenuClick?: () => void }

export default function AppTopbar({ onMenuClick }: AppTopbarProps) {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-2 bg-card px-3 shadow-md sm:px-4">
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-foreground/80 hover:bg-muted hover:text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 shrink-0" />
        </button>
        <p className="truncate text-sm font-medium text-foreground">
          <span className="hidden sm:inline">Welcome, </span>
          {user?.name ?? user?.email}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-1.5 px-2 sm:px-3">
            <Globe className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:inline">View Website</span>
          </Button>
        </Link>
        <Button variant="ghost" size="sm" onClick={logout} className="gap-1.5 px-2 sm:gap-2 sm:px-3">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  )
}
