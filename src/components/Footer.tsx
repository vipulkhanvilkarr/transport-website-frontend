import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const quickLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Global Network', to: '/contact-us#global-network' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>TRANSPORT LOGISTICS</h2>
          <p className={styles.ctaTagline}>Support center 24/7</p>
          <a href="tel:+912268099999" className={styles.ctaPhone}>
            +91 22 680 99999
          </a>
          <p className={styles.ctaAddress}>
            You can find us at<br />
            707-713, Corporate Centre, Nirmal Life Style, L.B.S. Road, Mulund - West, Mumbai 400 080, India
          </p>
          <p className={styles.ctaEmail}>
            Get in touch with us<br />
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <h3 className={styles.linksTitle}>Useful Links</h3>
          <nav className={styles.links} aria-label="Footer">
            <ul>
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={styles.copyright}>
            Transport Logistics is a third-generation international logistics and freight forwarding company with decades of domain expertise. Headquartered locally with offices and associates across multiple continents, we cater to hundreds of unique national and international locations.
          </p>
        </div>
      </div>
    </footer>
  )
}
