import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    pan: '',
    gst: '',
    mobile: '',
    address: '',
    email: '',
    password: '',
  })
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    register({ ...form })
    navigate('/dashboard', { replace: true })
  }

  const inputClass = 'mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring/20'

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'company', label: 'Company name', type: 'text' },
    { name: 'pan', label: 'PAN', type: 'text' },
    { name: 'gst', label: 'GST', type: 'text' },
    { name: 'mobile', label: 'Mobile', type: 'tel' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ]

  return (
    <motion.div
      className="mx-auto max-w-lg px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 flex justify-center">
        <Link to="/" className="inline-flex items-center gap-2.5 font-display text-xl font-bold text-foreground">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
            <Truck className="h-6 w-6 text-primary" />
          </span>
          STAR AUTOMART
        </Link>
      </div>
      <motion.div
        className="rounded-2xl bg-card p-8 shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1 className="font-display text-2xl font-bold text-foreground">Register</h1>
        <p className="mt-1 text-sm text-muted-foreground">Create your customer account</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {fields.map(({ name, label, type }) => (
            <label key={name} className="block">
              <span className="text-sm font-medium text-foreground">{label}</span>
              <input
                type={type}
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                required={['name', 'email', 'password'].includes(name)}
                className={inputClass}
              />
            </label>
          ))}
          <Button type="submit" className="w-full" size="lg">
            Register
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </motion.div>
  )
}
