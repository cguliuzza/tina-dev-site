import Hero from '../components/Hero'
import Footer from '../components/Footer'
import PortfolioCards from '../components/PortfolioCards'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div>
      <Hero />
      <PortfolioCards />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
