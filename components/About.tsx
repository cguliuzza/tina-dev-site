/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Testimonials from './Testimonials'

export const metadata: Metadata = {
  title: 'About',
  description: 'React Product Engineer at Really Good Emails',
}

export default function About() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <section id="about">
        <Testimonials />
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-light tracking-normal">
                Christina Guliuzza
              </h2>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Me
              </h1>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                Hey, I'm Christina. Most folks know me as{' '}
                <span className="font-semibold">Tina</span>.
              </p>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                I have developed and maintained end-to-end products using
                Javascript and React. I am particularly interested in
                programming{' '}
                <span className="font-semibold">
                  customer-centric SaaS applications,
                </span>{' '}
                with a focus on{' '}
                <span className="font-semibold">data-driven</span> decision
                making and rapid growth.
              </p>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                My understanding of{' '}
                <span className="font-semibold">user experience</span> and{' '}
                <span className="font-semibold">data analysis</span> enables me
                to make informed product decisions. My colleagues have described
                me as{' '}
                <span className="font-semibold">
                  detail-oriented, patient, and reliable.
                </span>
              </p>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                I'm currently a React Product Engineer at Really Good Emails,
                where I lead our SaaS product development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
