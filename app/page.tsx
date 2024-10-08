import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import PortfolioCards from '../components/PortfolioCards'

export default function Page() {
  return (
    <div>
      <Hero />
      <PortfolioCards />
      <Testimonials />
      <About />
    </div>
  )
}
