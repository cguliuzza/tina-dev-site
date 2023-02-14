'use client'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    console.log('submitted')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
