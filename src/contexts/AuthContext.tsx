import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type UserRole = 'customer' | 'admin'

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  company?: string
}

type AuthContextType = {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string, asAdmin?: boolean) => void
  logout: () => void
  register: (data: RegisterData) => void
}

type RegisterData = {
  name: string
  company: string
  pan: string
  gst: string
  mobile: string
  address: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = sessionStorage.getItem('star_automart_user')
    if (saved) try { return JSON.parse(saved) } catch { return null }
    return null
  })

  const login = useCallback((email: string, _password: string, asAdmin = false) => {
    const role: UserRole = asAdmin ? 'admin' : 'customer'
    const u: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role,
    }
    setUser(u)
    sessionStorage.setItem('star_automart_user', JSON.stringify(u))
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    sessionStorage.removeItem('star_automart_user')
  }, [])

  const register = useCallback((_data: RegisterData) => {
    const u: User = {
      id: '1',
      name: _data.name,
      email: _data.email,
      role: 'customer',
      company: _data.company,
    }
    setUser(u)
    sessionStorage.setItem('star_automart_user', JSON.stringify(u))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
