import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'CSR', to: '/about-us#csr' },
      { label: 'Awards', to: '/about-us#awards' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Customs House India Agent', to: '/services' },
      { label: 'Freight Forwarding International Air and Sea', to: '/services' },
      { label: 'Charter Services', to: '/services' },
      { label: 'Project Logistics', to: '/services' },
      { label: 'Nominated Cargo', to: '/services' },
      { label: 'Bonded Trucking and Trans Shipping', to: '/services' },
      { label: 'Port & Vessel Handling', to: '/services' },
      { label: 'Domestic Transportation Road Transportation', to: '/services' },
      { label: 'Inventory Warehousing and Distribution', to: '/services' },
      { label: 'Third Country Export Cross Trade', to: '/services' },
      { label: 'Post Shipment Activities', to: '/services' },
      { label: 'Export Import License DGFT Licensing', to: '/services' },
      { label: 'Value Added Services', to: '/services' },
    ],
  },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Global Network', to: '/contact-us#global-network' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className={styles.header} role="banner">
      <div className={styles.topBar}>
        <div className={styles.container}>
          <a href="mailto:info@example.com" className={styles.topLink}>
            info@example.com
          </a>
          <a href="mailto:investor@example.com" className={styles.topLink}>
            investor@example.com
          </a>
          <span className={styles.phone}>Phone: +91 (22) 68099999 (100 lines)</span>
        </div>
      </div>
      <div className={styles.navWrap}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} aria-label="Transport Logistics - Home">
            Transport Logistics
          </Link>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={mobileOpen}
            aria-controls="main-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
          </button>
          <nav id="main-nav" className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`} aria-label="Main">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  {item.children ? (
                    <div className={styles.dropdownWrap}>
                      <button
                        type="button"
                        className={styles.dropdownBtn}
                        aria-expanded={openDropdown === item.label}
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                      </button>
                      <ul className={`${styles.dropdown} ${openDropdown === item.label ? styles.dropdownOpen : ''}`}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link to={child.to} onClick={() => setMobileOpen(false)}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={item.to} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
