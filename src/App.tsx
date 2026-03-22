import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import PublicLayout from './layouts/PublicLayout'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import TrackShipment from './pages/TrackShipment'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/app/Dashboard'
import Shipments from './pages/app/Shipments'
import CreateBooking from './pages/app/CreateBooking'
import Tracking from './pages/app/Tracking'
import Invoices from './pages/app/Invoices'
import Customers from './pages/app/Customers'
import Containers from './pages/app/Containers'
import Rates from './pages/app/Rates'
import Billing from './pages/app/Billing'
import Reports from './pages/app/Reports'

function App() {
  return (
    <AuthProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="track" element={<TrackShipment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="shipments/new" element={<CreateBooking />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="customers" element={<Customers />} />
          <Route path="containers" element={<Containers />} />
          <Route path="rates" element={<Rates />} />
          <Route path="billing" element={<Billing />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
