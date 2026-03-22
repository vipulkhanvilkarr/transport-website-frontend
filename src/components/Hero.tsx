import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.badges}>
        <span className={styles.badge}>AEO CERTIFIED COMPANY</span>
        <span className={styles.badge}>DECADES OF DOMAIN EXPERTISE</span>
        <span className={styles.badge}>SERVING THE GLOBAL DEMAND FOR A RELIABLE LOGISTICS PARTNER</span>
        <span className={styles.badge}>BRANCHES AT CITIES, HUBS, AIRPORTS & SEAPORTS</span>
      </div>
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          Welcome to Transport Logistics
        </h1>
        <p className={styles.subtitle}>
          A third-generation international logistics and freight forwarding company with decades of domain expertise.
          Headquartered locally with offices and associates across multiple continents.
        </p>
        <Link to="/about-us" className={styles.cta} aria-label="View more about our services">
          View more about our services
        </Link>
      </div>
      <div className={styles.servicesPreview}>
        <ul>
          <li><Link to="/services/customs">Customs House (Agent)</Link></li>
          <li><Link to="/services/freight">Freight Forwarding — Air and Sea</Link></li>
          <li><Link to="/services/charter">Charter Services</Link></li>
          <li><Link to="/services/project">Project Logistics</Link></li>
          <li><Link to="/services/nominated">Nominated Cargo</Link></li>
          <li><Link to="/services/warehousing">Warehousing</Link></li>
        </ul>
      </div>
    </section>
  )
}
