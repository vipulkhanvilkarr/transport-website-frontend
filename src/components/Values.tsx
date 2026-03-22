import styles from './Values.module.css'

const values = [
  {
    title: 'Customer Satisfaction and Delight',
    description: 'To continuously improve our processes and offerings so as to deliver products and services that meet our customers\' expectations.',
  },
  {
    title: 'Accountability',
    description: 'To take responsibility to meet our commitments, individually and collectively.',
  },
  {
    title: 'Innovation',
    description: 'To encourage, recognize and reward sustainable innovation that helps us service our clients better.',
  },
  {
    title: 'Team Work',
    description: 'A commitment from every employee to contribute towards the overall success of the company and all fellow employees.',
  },
  {
    title: 'The Transport Logistics Family',
    description: 'A cohesive effort in the continuous improvement of our Quality Management Systems and in achieving greater milestones.',
  },
]

type ValuesProps = { title?: string }

export default function Values({ title = 'Our Values' }: ValuesProps) {
  return (
    <section className={styles.section} aria-labelledby="values-heading">
      <div className={styles.container}>
        <h2 id="values-heading" className={styles.heading}>
          {title}
        </h2>
        <ul className={styles.list}>
          {values.map((item, i) => (
            <li key={i} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
