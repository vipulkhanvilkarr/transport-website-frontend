import { Outlet } from 'react-router-dom'
import PublicHeader from '@/components/PublicHeader'
import PublicFooter from '@/components/PublicFooter'
import PublicPageBackground from '@/components/PublicPageBackground'

export default function PublicLayout() {
  return (
    <>
      <PublicPageBackground />
      <PublicHeader />
      <main id="main-content" className="relative z-10 min-h-screen bg-background" tabIndex={-1}>
        <Outlet />
      </main>
      <PublicFooter />
    </>
  )
}
