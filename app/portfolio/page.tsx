import type { Metadata } from 'next'
import PortfolioProject from '../../components/PortfolioProject'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Christina Guliuzza | Portfolio',
}

export default function PortfolioPage() {
  return (
    <div>
      <PortfolioProject />
    </div>
  )
}
