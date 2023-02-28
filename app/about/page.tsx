import type { Metadata } from 'next'
import Testimonials from '../../components/Testimonials'

export const metadata: Metadata = {
  title: 'About',
  description: 'React Product Engineer at Really Good Emails',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800">
        Hey, I'm Christina. Most folks know me as <b>Tina</b>.
      </p>
      <div className="prose prose-neutral text-neutral-800">
        <p>
          I'm currently the <b>React Product Engineer at Really Good Emails</b>,
          where I lead our SaaS product development.
        </p>
        <hr />
        <p>
          I'm passionate about many creative pursuits, including photography,
          hand lettering, note taking, and of course, coding. This combination
          of interests is what ultimately led me to my current role in building
          product websites.
        </p>
        <p>
          I <b>love</b> building for the web. From something as simple as a
          single HTML file – all the way to large Next.js applications. The web
          is incredible. Anyone can become a developer, writer, or creator – and
          no one has to ask for permission. You can just build.
        </p>
        <p className="mb-8">Outside of Really Good Emails, I ...</p>
        <Testimonials />
      </div>
    </section>
  )
}
