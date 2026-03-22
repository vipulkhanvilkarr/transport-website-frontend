import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Page.module.css'
import contactStyles from './Contact.module.css'

const serviceOptions = [
  'Customs House (India Agent)',
  'Freight Forwarding International - Air and Sea',
  'Charter Services',
  'Project Logistics',
  'Nominated Cargo',
  'Bonded Trucking and Trans Shipping',
  'Domestic Transportation - Road Transportation',
  'Inventory Warehousing and Distribution',
  'Third Country Export (Cross Trade)',
  'Post Shipment Activities',
  'Export Import License - DGFT Licensing',
  'Value Added Services',
]

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    location: '',
    landline: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: would send to backend
    console.log('Contact form submitted', formData)
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> → </span>
          <span>Contact Us</span>
        </nav>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Contact Us</p>
          <h1 className={styles.title}>Get In Touch</h1>
          <h2 className={styles.subtitle}>Get in touch with us</h2>
          <p className={styles.lead}>We would be happy to help</p>
        </header>

        <div className={contactStyles.contactGrid}>
          <div className={contactStyles.infoBlocks}>
            <div className={contactStyles.infoBlock}>
              <p className={contactStyles.infoLabel}>Support Center 24/7</p>
              <a href="tel:+912268099999" className={contactStyles.infoValue}>
                +91 (22) 68099999 (100 lines)
              </a>
            </div>
            <div className={contactStyles.infoBlock}>
              <p className={contactStyles.infoLabel}>Our Location</p>
              <p className={contactStyles.infoValuePlain}>
                707-713, Corporate Centre, Nirmal Life Style, L.B.S. Road, Mulund - West, Mumbai 400
                080, India
              </p>
            </div>
            <div className={contactStyles.infoBlock}>
              <p className={contactStyles.infoLabel}>Write To Us</p>
              <a href="mailto:info@example.com" className={contactStyles.infoValue}>
                info@example.com
              </a>
            </div>
          </div>

          <form className={contactStyles.form} onSubmit={handleSubmit}>
            <label className={contactStyles.label}>
              Your Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={contactStyles.input}
                required
              />
            </label>
            <label className={contactStyles.label}>
              Company name
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Designation
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Location
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Landline No.
              <input
                type="tel"
                name="landline"
                value={formData.landline}
                onChange={handleChange}
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Mobile No.
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={contactStyles.input}
              />
            </label>
            <label className={contactStyles.label}>
              Your eMail
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={contactStyles.input}
                required
              />
            </label>
            <label className={contactStyles.label}>
              Select Service
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={contactStyles.select}
              >
                <option value="">— Please choose an option —</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label className={contactStyles.label}>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={contactStyles.textarea}
                rows={4}
              />
            </label>
            <button type="submit" className={contactStyles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
