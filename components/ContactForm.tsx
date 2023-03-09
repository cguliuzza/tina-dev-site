'use client'

import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      })
    }
  }

  const handleOnChange = (e: {
    persist: () => void
    target: { id: any; value: any }
  }) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xvonqpna',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, 'Please refresh the page and try again')
      })
  }

  return (
    <section
      id="contact"
      className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Let’s Start a Conversation
        </h2>
        <p className="mt-2 text-lg leading-8 text-slate-600">
          What questions do you have for me?
        </p>
      </div>
      <form
        onSubmit={handleOnSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold leading-6 text-slate-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                required
                value={inputs.firstname}
                onChange={handleOnChange}
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold leading-6 text-slate-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required
                value={inputs.lastname}
                onChange={handleOnChange}
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-slate-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                value={inputs.email}
                onChange={handleOnChange}
                type="email"
                name="_replyto"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-slate-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                value={inputs.message}
                onChange={handleOnChange}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={status.submitting}
            className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            {!status.submitting
              ? !status.submitted
                ? 'Send Message'
                : 'Sent!'
              : 'Sending...'}
          </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <p className="mt-6 text-center text-base leading-8 text-slate-600">
          {status.info.msg}
        </p>
      )}
    </section>
  )
}
