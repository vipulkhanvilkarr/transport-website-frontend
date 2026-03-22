import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const services = [
  {
    id: 'customs',
    title: 'Customs House (India Agent)',
    description: 'Complete import and export customs clearance services at all major air and sea ports.',
    link: '/services/customs',
  },
  {
    id: 'freight',
    title: 'Freight Forwarding International — Air and Sea',
    description: "We move thousands of TEUs of cargo for corporate clients worldwide. C&F services with ease, flexibility and professionalism.",
    link: '/services/freight',
  },
  {
    id: 'charter',
    title: 'Charter Services',
    description: 'Charter services for Air Freight, Sea Freight and Barge. Experience in chartering every type of freight.',
    link: '/services/charter',
  },
  {
    id: 'project',
    title: 'Project Logistics',
    description: 'Specialised division with vast working knowledge and technical know-how for large project logistics.',
    link: '/services/project',
  },
  {
    id: 'nominated',
    title: 'Nominated Cargo',
    description: "Among the most reliable accredited, integrated logistic service providers. Dependable and cost-effective.",
    link: '/services/nominated',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Company-owned warehousing solutions: General Covered, General Open and Bonded Warehouses available.',
    link: '/services/warehousing',
  },
]

export default function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <h2 id="services-heading" className={styles.heading}>
          Our Services
        </h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <Link to={service.link} className={styles.cardLink}>
                View more about this service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
