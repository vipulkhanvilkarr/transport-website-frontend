import styles from './Disclaimer.module.css'

export default function Disclaimer() {
  return (
    <aside className={styles.aside} role="note">
      <div className={styles.container}>
        <h2 className={styles.title}>Disclaimer</h2>
        <p className={styles.text}>
          Please note that if you receive any email from us regarding change of bank details, kindly treat it as spam.
          Our bank account has not been changed. Please ensure to speak to us before making any payments.
        </p>
      </div>
    </aside>
  )
}
