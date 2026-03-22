import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [asAdmin, setAsAdmin] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password, asAdmin)
    navigate('/dashboard', { replace: true })
  }

  return (
    <motion.div
      className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="rounded-2xl bg-card p-8 shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="mb-8 flex justify-center">
          <Link to="/" className="inline-flex items-center gap-2.5 font-display text-xl font-bold text-foreground">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Truck className="h-6 w-6 text-primary" />
            </span>
            STAR AUTOMART
          </Link>
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">Login</h1>
        <p className="mt-1 text-sm text-muted-foreground">Customer or Admin login</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-foreground">Email / Mobile</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring/20"
              placeholder="Email or mobile number"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-foreground">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-ring/20"
            />
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={asAdmin}
              onChange={(e) => setAsAdmin(e.target.checked)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-sm text-foreground">Admin Login</span>
          </label>
          <Button type="submit" className="w-full" size="lg">
            Login
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-medium text-primary hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </motion.div>
  )
}
