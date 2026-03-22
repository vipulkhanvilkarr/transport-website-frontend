import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AppSidebar from '../components/AppSidebar'
import AppTopbar from '../components/AppTopbar'

export default function AppLayout() {
  const { isLoggedIn } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <AppTopbar onMenuClick={() => setSidebarOpen((o) => !o)} />
        <main className="min-w-0 flex-1 p-4 sm:p-5 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
