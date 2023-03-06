import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page to get in touch with Christina Guliuzza',
}

export default function ContactPage() {
  return (
    <section id="contact">
      <ContactForm />
    </section>
  )
}
