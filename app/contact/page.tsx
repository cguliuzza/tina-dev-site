import type { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page to get in touch with Christina Guliuzza',
}

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}
